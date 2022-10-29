import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RowItem from './RowItem';
import { Button, Checkbox, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import { ItemWrapper } from '../../styled';
import { colors } from '@/styles/colors';

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
  },
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
  },
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
    <ItemWrapper>
      <Top>
        <Typography variant="h2">Out of Sync. Records</Typography>
        <Info>
          [ <span>JOB[DEC] TASK[Owner.table1 Owner.table2] DATE[2022-07-28 10:20:10</span> ]
        </Info>
        <Buttons>
          <CustomButtonType2>
            <strong>Cancel</strong>
            <br />
            Compare paris
          </CustomButtonType2>
          <CustomButton>
            <strong>Repair</strong>
            <br />
            Out-of-Sync Dat
          </CustomButton>
          <CustomButtonType3>
            <strong>Re-compare</strong>
            <br />
            Out-of-Sync Data
          </CustomButtonType3>
        </Buttons>
      </Top>

      <ScrollContainer>
        <StyledTableContainer>
          <StyledTable stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.field} align="center">
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
  height: 200px;
  overflow-y: auto;
  margin-top: 5px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${colors.gray900};

  > span {
    font-size: 13px;
    color: ${colors.green100};
  }
`;

const Buttons = styled.div`
  display: flex;
`;
const CustomButton = styled(Button)`
  display: block;
  line-height: normal;
  &&& {
    font-size: 10px;
  }
  padding: 2px 15px;
  & + button {
    margin-left: 10px;
  }
  > strong {
    font-size: 12px;
    text-transform: none;
  }
`;

const CustomButtonType2 = styled(CustomButton)`
  border: 1px solid ${({ theme }) => theme.palette.red100};
  color: ${({ theme }) => theme.palette.red100};
`;

const CustomButtonType3 = styled(CustomButton)`
  border: 1px solid ${({ theme }) => theme.palette.blue100};
  color: ${({ theme }) => theme.palette.blue100};
`;
export default Records;
