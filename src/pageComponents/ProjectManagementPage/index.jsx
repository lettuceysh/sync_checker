import { dsManagementDeleteDS } from '@/api/dsManagement';
import { projectManagementSearchAllProject } from '@/api/project';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import usePostProcess, { TYPE_TEXT } from '@/hooks/usePostProcess';
import { makeDefaultValues } from '@/libs/utils/array';
import { useAlertStore } from '@/store';

import { colors } from '@/styles/colors';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';
import { FormTop } from '@/styles/components/AddFormArea';

import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';

import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

import ProjectAddForm from './components/ProjectAddForm';

const columns = [
  { field: 'name', headerName: 'ProjectName' },
  { field: 'source_DS_INFO_name', headerName: 'Name' },
  { field: 'source_DS_INFO_settings', headerName: 'Settings' },
  { field: 'target_DS_INFO_name', headerName: 'Name' },
  { field: 'target_DS_INFO_settings', headerName: 'Setting' }
];

const defaultValues = makeDefaultValues(columns);

const ProjectManagement = () => {
  const [data, setData] = useState([]);
  const { goProcess } = usePostProcess();

  const [selectedData, setSelectedData] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { alert } = useAlertStore();

  useEffect(() => {
    projectManagementSearchAllProject().then((response) => {
      setData(response.data.projects);
    });
  }, []);

  const clickAdd = () => {
    setSelectedData(null);
    setShowAddForm(true);
  };

  const clickModify = () => {
    setShowAddForm(true);

    // todo: 아래 케이스 구현 필요
    // alert({
    //   content: (
    //     <>
    //       {selectedData.name}을 사용중인 Job이 있습니다.
    //       <br /> 해당 Job을 삭제 후 수정 가능합니다.
    //     </>
    //   )
    // });
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

    // todo: 아래 케이스 구현 필요
    // alert({
    //   content: (
    //     <>
    //       {selectedData.name}을 사용중인 Job이 있습니다.
    //       <br /> 해당 Job을 삭제 후 삭제 가능합니다.
    //     </>
    //   )
    // });

    setSelectedData(null);
  };

  return (
    <SubPageWrapper>
      <FormTop>
        <CustomBreadcrumbs current="Project list" />
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
      </FormTop>
      <StyledTableContainer>
        <StyledTable stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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

      {showAddForm && (
        <ProjectAddForm
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

export default ProjectManagement;
