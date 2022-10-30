import DefaultLayout from '@/layouts/DefaultLayout';
import UserManagement from '@/pageComponents/UserManagement';
import React from 'react';

const UserManagementPage = () => {
  return (
    <DefaultLayout>
      <UserManagement />
    </DefaultLayout>
  );
};

export default UserManagementPage;
