import { dsManagementSearchAllDSInfo } from '@/api/dataSource';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { colors } from '@/styles/colors';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';

import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';

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
      response.data.ds = response.data.ds.map((data) => ({
        ...data,
        source_target: data.source_target === 0 ? 'Source' : 'Target'
      }));
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
      <Top>
        <CustomBreadcrumbs current="data source management" />
        <ButtonWrapper>
          <ButtonNormal className="blue" onClick={clickAdd} style={{ width: '100px' }}>
            Add
          </ButtonNormal>
          <ButtonNormal style={{ width: '100px' }}>Modify</ButtonNormal>
          <ButtonNormal className="red" onClick={clickAdd} style={{ width: '100px' }}>
            Delete
          </ButtonNormal>
        </ButtonWrapper>
      </Top>
      <ScrollContainer>
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
                <TableRow
                  key={rowIndex}
                  onClick={() => clickRow({ ...row, rowIndex })}
                  className={selectedData?.rowIndex === rowIndex && 'on'}
                >
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
      </ScrollContainer>
      {isShowDataSourceAdd && (
        <DataSourceAddForm
          modifyInfo={selectedData}
          onClose={() => setIsShowDataSourceAdd(false)}
        />
      )}
    </SubPageWrapper>
  );
};

const ScrollContainer = styled.div`
  max-height: 115px;
  overflow-y: auto;
  margin-top: 5px;
  border-bottom: 1px solid ${colors.bluegray250};
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default DataSource;
