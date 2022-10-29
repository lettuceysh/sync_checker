import { projectManagementSearchAllProject } from '@/api/project';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';

import { colors } from '@/styles/colors';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';

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

const ProjectManagement = () => {
  const [data, setData] = useState([]);

  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    projectManagementSearchAllProject().then((response) => {
      console.log('response', response);

      setData(response.data.projects);
    });
  }, []);

  const clickRow = (dataSource) => {
    setSelectedData(dataSource);
  };

  const clickAdd = () => {
    setSelectedData({});
  };

  const closeForm = () => {
    setSelectedData(null);
  };

  return (
    <SubPageWrapper>
      <Top>
        <CustomBreadcrumbs current="Project Management" />
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
      {selectedData && <ProjectAddForm modifyInfo={selectedData} onClose={closeForm} />}
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

export default ProjectManagement;
