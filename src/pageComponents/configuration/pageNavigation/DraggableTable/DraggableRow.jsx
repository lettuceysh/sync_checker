import { Draggable } from 'react-beautiful-dnd';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const DragableRow = ({ item, index }) => {
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
            <TableCell align="left">
              <div {...draggableProvided.dragHandleProps}>
                <DragHandleIcon />
              </div>
            </TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell align="right">{item.unitPrice}</TableCell>
            <TableCell align="right">{item.quantity}</TableCell>
            <TableCell align="right">{(item.unitPrice * item.quantity).toFixed(2)}</TableCell>
          </TableRow>
        );
      }}
    </Draggable>
  );
};

export default DragableRow;
