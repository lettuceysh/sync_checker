import { dsManagementSearchAllDSInfo } from '@/api/dataSource';
import { NormalButton } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { BaseWrapper } from '@/styles/common';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';
import {
  Breadcrumbs,
  Button,
  Radio,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import DataSourceAdd from './components/DataSourceAdd';

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
  const [isShowDataSourceAdd, setIsShowDataSourceAdd] = useState(false);
  console.log('isShowDataSourceAdd', isShowDataSourceAdd);

  useEffect(() => {
    dsManagementSearchAllDSInfo().then((response) => {
      setData(response.data.ds);
    });
  }, []);
  return (
    <Wrapper>
      <CustomBreadcrumbs current="data source list" />

      <Buttons>
        <NormalButton onClick={() => setIsShowDataSourceAdd(true)}>Add</NormalButton>
      </Buttons>
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
      <DataSourceAdd open={isShowDataSourceAdd} onClose={() => setIsShowDataSourceAdd(false)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${BaseWrapper}
`;

const Buttons = styled.div`
  text-align: right;
`;

export default DataSource;