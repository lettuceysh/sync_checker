import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
            {/* note: `snapshot.isDragging` is useful to style or modify behaviour of dragged cells */}
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
