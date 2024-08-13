import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '@/components/header/AdminHeader';

function AdminIndex() {
  return (
    <div className="bg-[#DADADA] flex flex-col items-center">
      <AdminHeader />
      <Outlet />
    </div>
  );
}

export default AdminIndex;
