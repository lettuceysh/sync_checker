import { dsManagementSearchAllDSInfo } from '@/api/dataSource';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { makeDefaultValues } from '@/libs/utils/array';
import { useAlertStore } from '@/store';
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

const defaultValues = makeDefaultValues(columns);

const DataSource = () => {
  const [data, setData] = useState([]);

  const [selectedData, setSelectedData] = useState(null);

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
  };

  const clickAdd = () => {
    setSelectedData(defaultValues);
  };

  const closeForm = () => {
    setSelectedData(null);
  };

  return (
    <SubPageWrapper>
      <Top>
        <CustomBreadcrumbs current="Data source management" />
        <ButtonWrapper>
          <ButtonNormal className="blue" onClick={clickAdd} style={{ width: '100px' }}>
            Add
          </ButtonNormal>
        </ButtonWrapper>
      </Top>
      <ScrollContainer>
        <StyledTableContainer>
          <StyledTable stickyHeader>
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
      {selectedData && (
        <DataSourceAddForm
          modifyInfo={selectedData}
          onClose={closeForm}
          defaultValues={defaultValues}
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
