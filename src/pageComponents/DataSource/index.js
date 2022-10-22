import { dsManagementSearchAllDSInfo } from '@/api/dataSource';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';
import { Radio, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'name', headerName: 'DBNAME' },
  { field: 'db_type', headerName: 'DBTYPE' },
  { field: 'source_target', headerName: 'source/target' },
  { field: 'account', headerName: 'account' },
  { field: 'password', headerName: 'password' },
  { field: 'connection_min', headerName: 'min' },
  { field: 'connection_max', headerName: 'max' },
  { field: 'jdbc_url', headerName: 'jdbc Url' }
];

const DataSource = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dsManagementSearchAllDSInfo().then((response) => {
      setData(response.data.ds);
    });
  }, []);
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
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, index) => (
                  <TableCell key={`${column.field}${index}`}>{row[column.field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DataSource;
