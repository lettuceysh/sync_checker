import { dsManagementSearchAllDSInfo } from '@/api/dataSource';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';

import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';

import { TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import DataSourceAddForm from './components/DataSourceAddForm';

const columns = [
  { field: 'name', headerName: 'DBNAME' },
  { field: 'db_type', headerName: 'DBTYPE' },
  { field: 'source_target', headerName: 'source/target' },
  { field: 'account', headerName: 'account' },
  { field: 'password', headerName: 'password' },
  { field: 'connection_min', headerName: 'min', align: 'center' },
  { field: 'connection_max', headerName: 'max', align: 'center' },
  { field: 'jdbc_url', headerName: 'jdbc Url' }
];

const DataSource = () => {
  const [data, setData] = useState([]);
  const [isShowDataSourceAdd, setIsShowDataSourceAdd] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  console.log('selectedData', selectedData);

  useEffect(() => {
    dsManagementSearchAllDSInfo().then((response) => {
      setData(response.data.ds);
    });
  }, []);

  const clickRow = (dataSource) => {
    setSelectedData(dataSource);
    setIsShowDataSourceAdd(true);
  };

  const clickAdd = () => {
    setSelectedData(null);
    setIsShowDataSourceAdd(true);
  };

  return (
    <SubPageWrapper>
      <CustomBreadcrumbs current="data source list" />

      <ButtonWrapper>
        <ButtonNormal onClick={clickAdd}>Add</ButtonNormal>
      </ButtonWrapper>
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
              <TableRow key={rowIndex} onClick={() => clickRow(row)}>
                {columns.map((column, index) => (
                  <TableCell key={`${column.field}${index}`} align={column.align}>
                    {row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      {isShowDataSourceAdd && (
        <DataSourceAddForm
          modifyInfo={selectedData}
          onClose={() => setIsShowDataSourceAdd(false)}
        />
      )}
    </SubPageWrapper>
  );
};

export default DataSource;
