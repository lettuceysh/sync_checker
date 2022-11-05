import { dsManagementDeleteDS, dsManagementSearchAllDSInfo } from '@/api/dsManagement';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import usePostProcess, { TYPE_TEXT } from '@/hooks/usePostProcess';
import { makeDefaultValues } from '@/libs/utils/array';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';

import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';

import { Radio, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
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
  const { goProcess } = usePostProcess();
  const [data, setData] = useState([]);

  const [selectedData, setSelectedData] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dsManagementSearchAllDSInfo().then((response) => {
      response.data.ds = response.data.ds.map((data) => ({
        ...data,
        source_target: data.source_target === 0 ? 'Source' : 'Target'
      }));
      setData(response.data.ds);
    });
  }, []);

  const clickAdd = () => {
    setSelectedData(null);
    setShowAddForm(true);
  };

  const clickModify = () => {
    setShowAddForm(true);
  };

  const closeForm = () => {
    setSelectedData(null);
    setShowAddForm(false);
  };

  const clickRadio = (value) => {
    setSelectedData(value);
  };

  const clickDelete = () => {
    goProcess({
      api: dsManagementDeleteDS,
      requestData: { name: selectedData.name },
      title: TYPE_TEXT.remove
    });

    setSelectedData(null);
  };

  return (
    <SubPageWrapper>
      <Top>
        <CustomBreadcrumbs current="Data source list" />
        <ButtonWrapper>
          <ButtonNormal className="blue" onClick={clickAdd} style={{ width: '100px' }}>
            Add
          </ButtonNormal>
          <ButtonNormal
            onClick={clickModify}
            style={{ width: '100px' }}
            disabled={!selectedData?.name}
          >
            Modify
          </ButtonNormal>
          <ButtonNormal
            className="red"
            onClick={clickDelete}
            style={{ width: '100px' }}
            disabled={!selectedData?.name}
          >
            Delete
          </ButtonNormal>
        </ButtonWrapper>
      </Top>
      {/* <ScrollContainer> */}
      <StyledTableContainer>
        <StyledTable stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell align="center">
                  <input
                    type="radio"
                    name="table"
                    checked={selectedData?.rowIndex === rowIndex}
                    onClick={() => clickRadio({ ...row, rowIndex })}
                  />
                </TableCell>
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
      {/* </ScrollContainer> */}

      {showAddForm && (
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
