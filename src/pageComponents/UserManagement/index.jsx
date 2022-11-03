import { userSearchAllUsersInfo } from '@/api/user';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';
import { FormTop } from '@/styles/components/AddFormArea';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';
import { Checkbox, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserAddForm from './components/UserAddForm';

const UserManagement = () => {
  const [users, setUsers] = useState();
  const [selectedData, setSelectedData] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { alert } = useAlertStore();

  useEffect(() => {
    userSearchAllUsersInfo().then((response) => {
      setUsers(response.data.users);
    });
  }, []);

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
    alert({
      content: `[${selectedData.name}] 사용자를 삭제 하시겠습니까?`,
      cancelText: 'Cancel',
      onOk: () => {}
    });
  };

  return (
    <SubPageWrapper>
      <FormTop>
        <CustomBreadcrumbs current="User Management" />
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
      <ScrollContainer>
        <StyledTableContainer>
          <StyledTable stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>User Phone</TableCell>
                <TableCell>User E-Mail</TableCell>
                <TableCell>User Role</TableCell>
                <TableCell>User Locked</TableCell>
                <TableCell>User Description</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users?.map((user, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell align="center">
                    <input
                      type="radio"
                      name="table"
                      checked={selectedData?.rowIndex === rowIndex}
                      onClick={() => clickRadio({ ...user, rowIndex })}
                    />
                  </TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="center">{user.role === 1 ? 'Admin' : 'Normal'}</TableCell>
                  <TableCell align="center">
                    {<Checkbox checked={user.locked} disabled />}
                  </TableCell>
                  <TableCell>{user.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </ScrollContainer>
      {showAddForm && <UserAddForm modifyInfo={selectedData} onClose={closeForm} />}
    </SubPageWrapper>
  );
};

const ScrollContainer = styled.div`
  max-height: 115px;
  overflow-y: auto;
  margin-top: 5px;
  border-bottom: 1px solid ${colors.bluegray250};
`;

export default UserManagement;
