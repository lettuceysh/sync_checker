import { jobManagementDeleteJob } from '@/api/jobManagement';
import { useSearchAllJobWithProject } from '@/api/querys/jobManagementQuery';
import { userSearchAllUsersInfo } from '@/api/user';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import usePostProcess, { TYPE_TEXT } from '@/hooks/usePostProcess';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';
import { FormTop } from '@/styles/components/AddFormArea';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';
import { Checkbox, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ConfigurationAddForm from './components/ConfigurationAddForm';

const Configuration = () => {
  const { goProcess } = usePostProcess();
  const { data: jobs } = useSearchAllJobWithProject();

  const [selectedData, setSelectedData] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const clickAdd = () => {
    setSelectedData({});
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
      api: jobManagementDeleteJob,
      requestData: { name: selectedData.id },
      title: TYPE_TEXT.remove
    });

    setSelectedData(null);
  };

  return (
    <SubPageWrapper>
      <FormTop>
        <CustomBreadcrumbs current="Job List" />
        <ButtonWrapper>
          <ButtonNormal className="blue" onClick={clickAdd} style={{ width: '100px' }}>
            Add
          </ButtonNormal>
          <ButtonNormal onClick={clickModify} style={{ width: '100px' }} disabled={!selectedData}>
            Modify
          </ButtonNormal>
          <ButtonNormal
            className="red"
            onClick={clickDelete}
            style={{ width: '100px' }}
            disabled={!selectedData}
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
              <TableCell>Project Name</TableCell>
              <TableCell>Source DB</TableCell>
              <TableCell>Target DB</TableCell>
              <TableCell>Source Table</TableCell>
              <TableCell>Target Table</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Delay Time</TableCell>
              <TableCell>비고</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {jobs?.map((job, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell align="center">
                  <input
                    type="radio"
                    name="table"
                    checked={selectedData?.rowIndex === rowIndex}
                    onClick={() => clickRadio({ ...job, rowIndex })}
                  />
                </TableCell>
                <TableCell>{job.project_name}</TableCell>
                <TableCell>{job.source_ds_name}</TableCell>
                <TableCell>{job.target_ds_name}</TableCell>
                <TableCell>{job.source_table_name}</TableCell>
                <TableCell>{job.target_table_name}</TableCell>
                <TableCell align="center">{job.period_sec} sec</TableCell>
                <TableCell align="center">{job.delay_sec} sec</TableCell>
                <TableCell>{job.descriptions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      {showAddForm && <ConfigurationAddForm modifyInfo={selectedData} onClose={closeForm} />}
    </SubPageWrapper>
  );
};

const ScrollContainer = styled.div`
  max-height: 115px;
  overflow-y: auto;
  margin-top: 5px;
  border-bottom: 1px solid ${colors.bluegray250};
`;

export default Configuration;
