import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DraggableRow from './DraggableRow';
import { TextField } from '@mui/material';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';

const tableData = [
  { uuid: '1', description: 'Item #1', unitPrice: 11.11, quantity: 1 },
  { uuid: '2', description: 'Item #2', unitPrice: 22.22, quantity: 2 },
  { uuid: '3', description: <TextField />, unitPrice: 33.33, quantity: 3 },
  { uuid: '4', description: 'Item #4', unitPrice: 44.44, quantity: 4 },
  { uuid: '5', description: 'Item #5', unitPrice: 55.55, quantity: 5 }
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? '#757ce8' : 'white',
  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 10,
  width: 250
});

const DraggableTable = () => {
  const [localItems, setLocalItems] = useState(tableData);

  // normally one would commit/save any order changes via an api call here...
  const handleDragEnd = (result, provided) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    setLocalItems((prev) => {
      const temp = [...prev];
      const d = temp[result.destination.index];
      temp[result.destination.index] = temp[result.source.index];
      temp[result.source.index] = d;

      return temp;
    });
  };

  return (
    <Wrapper>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">&nbsp;</TableCell>
              <TableCell>index</TableCell>
              <TableCell>PK/UK</TableCell>
              <TableCell>
                Column
                <br />
                Name
              </TableCell>
              <TableCell>
                Column
                <br />
                Type
              </TableCell>
              <TableCell>Nullable</TableCell>
              <TableCell>function</TableCell>
              <TableCell>
                적용
                <br />
                여부
              </TableCell>
            </TableRow>
          </TableHead>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="vertical">
              {(droppableProvided) => (
                <TableBody ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                  {tableData.map((item, index) => (
                    <DraggableRow key={item.uuid} item={item} index={index} />
                  ))}
                  {droppableProvided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </DragDropContext>
        </StyledTable>
      </StyledTableContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  padding-left: 20px;
`;
export default DraggableTable;
