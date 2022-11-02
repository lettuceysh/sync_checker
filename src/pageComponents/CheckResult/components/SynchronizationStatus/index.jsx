import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RowItem from './RowItem';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import { ItemWrapper } from '../../styled';

const columns = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'source', headerName: 'C.N.Source', width: 130 },
  { field: 'target', headerName: 'C.N.Target' },
  { field: 'subId', headerName: 'Id' },
  { field: 'subSource', headerName: 'Source' },
  { field: 'subTarget', headerName: 'Target' },
  { field: 'subTarget', headerName: 'StartTime' },
  { field: 'startTime', headerName: 'EndTime' },
  { field: 'EndTime', headerName: 'RunningTime' },
  { field: 'RunningTime', headerName: 'Status' },
  { field: 'Status', headerName: 'Status' }
];

const rows = [
  {
    id: 1,
    name: 'Snow',
    source: 'Jon',
    target: 'test',
    sub: [
      {
        subId: '1-1',
        subSource: 'source1',
        subTarget: 'target1',
        startTime: 'startTime1',
        EndTime: 'EndTime1',
        RunningTime: 'RunningTime1',
        Status: 'Status1'
      },
      {
        subId: '1-2',
        subSource: 'source2',
        subTarget: 'target2',
        startTime: 'startTime2',
        EndTime: 'EndTime2',
        RunningTime: 'RunningTime2',
        Status: 'Status2'
      }
    ]
  },
  {
    id: 1,
    name: 'Snow',
    source: 'Jon',
    target: 'test',
    sub: [
      {
        subId: '1-1',
        subSource: 'source1',
        subTarget: 'target1',
        startTime: 'startTime1',
        EndTime: 'EndTime1',
        RunningTime: 'RunningTime1',
        Status: 'Status1'
      },
      {
        subId: '1-2',
        subSource: 'source2',
        subTarget: 'target2',
        startTime: 'startTime2',
        EndTime: 'EndTime2',
        RunningTime: 'RunningTime2',
        Status: 'Status2'
      }
    ]
  },
  {
    id: 1,
    name: 'Snow',
    source: 'Jon',
    target: 'test',
    sub: [
      {
        subId: '1-1',
        subSource: 'source1',
        subTarget: 'target1',
        startTime: 'startTime1',
        EndTime: 'EndTime1',
        RunningTime: 'RunningTime1',
        Status: 'Status1'
      },
      {
        subId: '1-2',
        subSource: 'source2',
        subTarget: 'target2',
        startTime: 'startTime2',
        EndTime: 'EndTime2',
        RunningTime: 'RunningTime2',
        Status: 'Status2'
      }
    ]
  },
  {
    id: 1,
    name: 'Snow',
    source: 'Jon',
    target: 'test',
    sub: [
      {
        subId: '1-1',
        subSource: 'source1',
        subTarget: 'target1',
        startTime: 'startTime1',
        EndTime: 'EndTime1',
        RunningTime: 'RunningTime1',
        Status: 'Status1'
      },
      {
        subId: '1-2',
        subSource: 'source2',
        subTarget: 'target2',
        startTime: 'startTime2',
        EndTime: 'EndTime2',
        RunningTime: 'RunningTime2',
        Status: 'Status2'
      }
    ]
  },
  {
    id: 1,
    name: 'Snow',
    source: 'Jon',
    target: 'test',
    sub: [
      {
        subId: '1-1',
        subSource: 'source1',
        subTarget: 'target1',
        startTime: 'startTime1',
        EndTime: 'EndTime1',
        RunningTime: 'RunningTime1',
        Status: 'Status1'
      },
      {
        subId: '1-2',
        subSource: 'source2',
        subTarget: 'target2',
        startTime: 'startTime2',
        EndTime: 'EndTime2',
        RunningTime: 'RunningTime2',
        Status: 'Status2'
      }
    ]
  },
  {
    id: 1,
    name: 'Snow',
    source: 'Jon',
    target: 'test',
    sub: [
      {
        subId: '1-1',
        subSource: 'source1',
        subTarget: 'target1',
        startTime: 'startTime1',
        EndTime: 'EndTime1',
        RunningTime: 'RunningTime1',
        Status: 'Status1'
      },
      {
        subId: '1-2',
        subSource: 'source2',
        subTarget: 'target2',
        startTime: 'startTime2',
        EndTime: 'EndTime2',
        RunningTime: 'RunningTime2',
        Status: 'Status2'
      }
    ]
  },
  {
    id: 1,
    name: 'Snow',
    source: 'Jon',
    target: 'test',
    sub: [
      {
        subId: '1-1',
        subSource: 'source1',
        subTarget: 'target1',
        startTime: 'startTime1',
        EndTime: 'EndTime1',
        RunningTime: 'RunningTime1',
        Status: 'Status1'
      },
      {
        subId: '1-2',
        subSource: 'source2',
        subTarget: 'target2',
        startTime: 'startTime2',
        EndTime: 'EndTime2',
        RunningTime: 'RunningTime2',
        Status: 'Status2'
      }
    ]
  }
];

const SynchronizationStatus = () => {
  return (
    <ItemWrapper>
      <Typography variant="h2">Job Synchronization Board</Typography>
      <ScrollContainer>
        <StyledTableContainer>
          <StyledTable stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  project
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center" colSpan={7}>
                  JOB -Synchronization Result
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.field}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return <RowItem row={row} columns={columns} key={row.id} />;
              })}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </ScrollContainer>
    </ItemWrapper>
  );
};

const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 5px;
`;

export default SynchronizationStatus;
