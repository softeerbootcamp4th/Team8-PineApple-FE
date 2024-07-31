import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import EventIntro from '@/pages/eventIntro/EventIntro';
import JoinEventIntro from '@/pages//joinEvent/JoinEventIntro';
import NewCarIntro from '@/pages/newCarIntro/NewCarIntro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '', element: <EventIntro /> },
      {
        path: 'event',
        children: [
          {
            index: true,
            element: <JoinEventIntro />,
          },
          {
            path: 'worldcup',
            element: <></>,
          },
          {
            path: 'miniquiz',
            element: <></>,
          },
        ],
      },
      {
        path: 'introduce',
        element: <NewCarIntro />,
      },
    ],
  },
]);

export default router;
