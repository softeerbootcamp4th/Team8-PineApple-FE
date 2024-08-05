import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import EventIntro from '@/pages/eventIntro/EventIntro';
import JoinEventIntro from '@/pages//joinEvent/JoinEventIntro';
import NewCarIntro from '@/pages/newCarIntro/NewCarIntro';
import MiniQuiz from '@/pages/miniquiz/MiniQuiz';
import WorldCup from '@/pages/worldCup/WorldCupGame';

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
            element: <WorldCup />,
          },
          {
            path: 'miniquiz',
            element: <MiniQuiz />,
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
