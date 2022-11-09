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
import { useSearchAllSessionResultByOptions } from '@/api/querys/jobManagementQuery';
import { useSearchStore } from '../../store/useSearchStore';

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

const rows = [];

const SynchronizationStatus = () => {
  const { requestData } = useSearchStore();

  const { data } = useSearchAllSessionResultByOptions(requestData);

  console.log('data', data);
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
