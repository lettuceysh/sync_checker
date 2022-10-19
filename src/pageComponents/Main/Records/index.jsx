import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RowItem from './RowItem';
import { Checkbox, Typography } from '@mui/material';
import styled from '@emotion/styled';

const columns = [
  { field: 'checkbox', headerName: <Checkbox /> },
  { field: 'no', headerName: 'MM_No' },
  { field: 'position', headerName: 'Position' },
  { field: 'col1', headerName: 'Col1' },
  { field: 'col2', headerName: 'Col2' },
  { field: 'col3', headerName: 'Col3' },
  { field: 'col4', headerName: 'Col4' },
  { field: 'col5', headerName: 'Col5' },
  { field: 'col6', headerName: 'Col6' },
  { field: 'col7', headerName: 'Col7' }
];

const rows = [
  {
    checkbox: <Checkbox />,
    id: 1,
    no: '1',
    sub: [
      {
        position: 'Source',
        col1: 'val1',
        col2: 'val2',
        col3: 'val3',
        col4: 'val4',
        col5: 'val5',
        col6: 'val6',
        col7: 'val7'
      },
      {
        position: 'Source',
        col1: 'val1',
        col2: 'val2',
        col3: 'val3',
        col4: 'val4',
        col5: 'val5',
        col6: 'val6',
        col7: 'val7'
      }
    ]
  },
  {
    checkbox: <Checkbox />,
    id: 2,
    no: '2',
    sub: [
      {
        position: 'Source',
        col1: 'val1',
        col2: 'val2',
        col3: 'val3',
        col4: 'val4',
        col5: 'val5',
        col6: 'val6',
        col7: 'val7'
      },
      {
        position: 'Source',
        col1: 'val1',
        col2: 'val2',
        col3: 'val3',
        col4: 'val4',
        col5: 'val5',
        col6: 'val6',
        col7: 'val7'
      }
    ]
  }
];

const Records = () => {
  return (
    <Wrapper>
      <Top>
        <Typography>Out of Sync. Records</Typography>
        <Info>JOB[DEC] TASK[Owner.table1  Owner.table2] DATE[2022-07-28 10:20:10</Info>
        <Buttons>
          <Button>
            <strong>Cancel</strong>
            <br />
            Compare paris
          </Button>
          <Button>
            <strong>Repair</strong>
            <br />
            Out-of-Sync Dat
          </Button>
          <Button>
            <strong>Re-compare</strong>
            <br />
            Out-of-Sync Data
          </Button>
        </Buttons>
      </Top>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return <RowItem row={row} columns={columns} key={row.id} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  border: 1px solid blue;
`;

const Buttons = styled.button`
  margin-left: auto;
  display: flex;
`;
const Button = styled.button`
  border: 1px solid gray;
`;

export default Records;
