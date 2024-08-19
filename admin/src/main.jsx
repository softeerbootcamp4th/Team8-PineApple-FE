import React from 'react';
import { DateProvider } from '@/context/dateContext';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import router from '@/router';
import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DateProvider>
    <RouterProvider router={router} />,
  </DateProvider>,
);
