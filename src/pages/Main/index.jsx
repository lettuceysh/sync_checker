import { Grid, Paper, Typography } from '@mui/material';
import CircleChart from '../../components/PieChart';
import React from 'react';
import styled from '@emotion/styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CheckBox } from '@mui/icons-material';

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
        subSource: 'source',
        subTarget: 'target',
        startTime: 'startTime',
        EndTime: 'EndTime',
        RunningTime: 'RunningTime',
        Status: 'Status'
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

const data = [
  { name: 'Bubble Tea Sold', value: 10 },
  { name: 'Bubble Tea Left', value: 4 }
];

const data2 = [
  { name: 'Bubble Tea Sold', value: 20 },
  { name: 'Bubble Tea Left', value: 2 }
];

const Main = () => {
  return (
    <Grid>
      <Typography variant="h1" component="h2">
        SyncChecker For Oracle GoldenGate
      </Typography>

      <Paper elevation={10}>
        <CircleChartWrapper>
          <CircleChart data={data} />
          <CircleChart data={data2} />
          <CircleChart data={data2} />
        </CircleChartWrapper>
        <Grid>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={2}>
                    <CheckBox checked={false} />
                  </TableCell>
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
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell rowSpan={row.sub.length}>
                        <CheckBox checked={false} />
                      </TableCell>
                      {columns.map((column) => {
                        const value = row[column.field];

                        return (
                          <>
                            <TableCell key={column.field} rowSpan={row.sub.length}>
                              {value}
                            </TableCell>
                          </>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper>
    </Grid>
  );
};

const CircleChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  > div {
    min-width: 200px;
  }
`;

export default Main;
