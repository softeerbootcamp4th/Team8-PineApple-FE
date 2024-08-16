import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminHeader from '@/components/header/AdminHeader';
import TabHeader from '@/components/header/TabHeader';
import { DateProvider } from '@/context/dateContext';

function App() {
  const location = useLocation();
  const hideHeader = ['/login', '/error'].includes(location.pathname);

  return (
    <DateProvider>
      <div className="bg-[#DADADA] flex flex-col items-center min-w-[700px]">
        {!hideHeader && <AdminHeader />}
        {!hideHeader && <TabHeader />}
        <div className="w-[90%] flex flex-col items-center pb-2000">
          <Outlet />
        </div>
      </div>
    </DateProvider>
  );
}

export default App;
