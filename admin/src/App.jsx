import React, { useEffect, useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AdminHeader from '@/components/header/AdminHeader';
import TabHeader from '@/components/header/TabHeader';
import { DateContext } from '@/context/dateContext';
import dateFormatting from '@/utils/dateFormatting';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideHeader = ['/login', '/error'].includes(location.pathname);
  const { setDateInfo } = useContext(DateContext);

  useEffect(() => {
    if (location.pathname === '/') {
      const today = new Date();
      const formattedDate = dateFormatting(today);
      navigate(`/${formattedDate}`);
    }
  }, [location, navigate]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const potentialDateSegment = pathSegments[1];

    if (potentialDateSegment && !isNaN(Date.parse(potentialDateSegment))) {
      const parsedDate = new Date(potentialDateSegment);
      setDateInfo(dateFormatting(parsedDate));
    }
  }, [location.pathname, setDateInfo]);

  return (
    <div className="bg-[#DADADA] flex flex-col items-center min-w-[700px] text-nowrap">
      {!hideHeader && <AdminHeader />}
      {!hideHeader && <TabHeader />}
      <div className="w-[90%] flex flex-col items-center pb-2000">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
