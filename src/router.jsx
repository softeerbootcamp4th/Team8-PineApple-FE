import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import EventIntro from '@/pages/eventIntro/EventIntro';
import JoinEventIntro from '@/pages//joinEvent/JoinEventIntro';
import NewCarIntro from '@/pages/newCarIntro/NewCarIntro';
import MiniQuiz from '@/pages/miniquiz/MiniQuiz';
import WorldCup from '@/pages/worldCup/WorldCupMain';
import WorldCupResult from '@/pages/worldCup/WorldCupResult';
import MiniQuizResult from '@/pages/miniquiz/MiniQuizResult';
import InvalidAccess from '@/pages/miniquiz/InvalidAccess';

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
            path: 'worldCup',
            element: <WorldCup />,
          },
          {
            path: 'worldCupResult',
            element: <WorldCupResult />,
          },
          {
            path: 'miniQuiz',
            element: <MiniQuiz />,
          },
          {
            path: 'invalidAccess',
            element: <InvalidAccess />,
          },
          {
            path: 'miniQuizResult',
            element: <MiniQuizResult />,
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
