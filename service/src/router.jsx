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
import NoQuiz from '@/pages/miniquiz/NoQuiz';
import Reward from '@/pages/joinEvent/Reward';
import AdminIndex from '@/pages/admin/AdminIndex';
import AdminEditEvent from '@/pages/admin/adminEditEvent/AdminEditEvent';

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
            path: 'noQuiz',
            element: <NoQuiz />,
          },
          {
            path: 'miniQuizResult',
            element: <MiniQuizResult />,
          },
          {
            path: 'reward',
            element: <Reward />,
          },
        ],
      },
      {
        path: 'introduce',
        element: <NewCarIntro />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminIndex />,
    children: [{ index: true, element: <AdminEditEvent /> }],
  },
]);

export default router;
