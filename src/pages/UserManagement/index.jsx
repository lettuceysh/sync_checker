import DefaultLayout from '@/layouts/DefaultLayout';
import SubLayout from '@/layouts/SubLayout';
import UserManagement from '@/pageComponents/UserManagement';
import React from 'react';

const UserManagementPage = () => {
  return (
    <SubLayout>
      <UserManagement />
    </SubLayout>
  );
};

export default UserManagementPage;
