import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';
import { Radio, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const columns = [
  { field: 'checkbox', headerName: '' },
  { field: 'no', headerName: 'MM_No' }
];

const rows = [
  {
    checkbox: <Radio />,
    id: 1,
    no: '1'
  }
];

const DataSource = () => {
  return (
    <Wrapper>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) =>
              columns.map((column, index) => (
                <TableCell key={`${column.field}${index}`}>{row[column.field]}</TableCell>
              ))
            )}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DataSource;
