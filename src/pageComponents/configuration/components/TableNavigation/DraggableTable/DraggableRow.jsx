import { Draggable } from 'react-beautiful-dnd';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Checkbox } from '@mui/material';

const DraggableRow = ({ item, index }) => {
  return (
    <Draggable draggableId={item.uuid} index={index} type="TAST">
      {(draggableProvided, snapshot) => {
        return (
          <TableRow
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
            style={{
              ...draggableProvided.draggableProps.style,
              background: snapshot.isDragging ? 'rgba(245,245,245, 0.75)' : 'none'
            }}
          >
            <TableCell align="center" width="50px">
              <div {...draggableProvided.dragHandleProps}>
                <DragHandleIcon />
              </div>
            </TableCell>
            <TableCell width="100px" align="center">
              {index + 1}
            </TableCell>
            <TableCell width="100px" align="center">
              Y
            </TableCell>
            <TableCell width="100px" align="center">
              Col1
            </TableCell>
            <TableCell width="100px" align="center">
              Char(10)
            </TableCell>
            <TableCell width="100px" align="center">
              Char2(10)
            </TableCell>
            <TableCell width="100px" align="center">
              N
            </TableCell>
            <TableCell width="100px" align="center">
              <Checkbox />
            </TableCell>
          </TableRow>
        );
      }}
    </Draggable>
  );
};

export default DraggableRow;
