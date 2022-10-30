import { userSearchAllUsersInfo } from '@/api/user';
import { colors } from '@/styles/colors';
import { SubPageWrapper } from '@/styles/common';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserAddForm from './components/UserAddForm';

const columns = [
  {
    field: 'id',
    headerName: 'User ID'
  },
  {
    headerName: 'User Name'
  },
  {
    headerName: 'Phone'
  },
  {
    headerName: 'E-Mail'
  },
  {
    headerName: 'User Role'
  },
  {
    headerName: 'Locked'
  },
  {
    headerName: 'Description'
  }
];

const UserManagement = () => {
  const [users, setUsers] = useState();
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    userSearchAllUsersInfo().then((response) => {
      console.log('respose', response);
      setUsers(response.data.users);
    });
  }, []);

  const clickRow = (dataSource) => {
    setSelectedData(dataSource);
  };

  return (
    <SubPageWrapper>
      <ScrollContainer>
        <StyledTableContainer>
          <StyledTable stickyHeader>
            <TableHead>
              <TableRow>
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
              {users?.map((user, index) => (
                <TableRow
                  key={index}
                  onClick={() => clickRow({ ...user, rowIndex: index })}
                  className={selectedData?.rowIndex === index && 'on'}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.locked}</TableCell>
                  <TableCell>{user.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </ScrollContainer>
      <UserAddForm modifyInfo={selectedData} />
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
