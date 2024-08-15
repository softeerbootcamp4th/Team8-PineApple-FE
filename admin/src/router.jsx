import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import MiniQuiz from '@/pages/miniQuiz/MiniQuiz';
import MiniQuizAnswer from '@/pages/miniQuizAnswer/MiniQuizAnswer';
import Draw from '@/pages/draw/Draw';
import Reward from '@/pages/reward/Reward';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MiniQuiz /> },
      {
        path: 'miniQuizAnswer',
        element: <MiniQuizAnswer />,
      },
      {
        path: 'draw',
        element: <Draw />,
      },
      {
        path: 'reward',
        element: <Reward />,
      },
    ],
  },
]);

export default router;
