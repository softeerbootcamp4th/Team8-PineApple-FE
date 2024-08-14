import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import AdminEditEvent from '@/pages/adminEditEvent/AdminEditEvent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <AdminEditEvent /> }],
  },
]);

export default router;
