import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import MiniQuiz from '@/pages/miniQuiz/MiniQuiz';
import MiniQuizAnswer from '@/pages/miniQuizAnswer/MiniQuizAnswer';
import Draw from '@/pages/draw/Draw';
import Reward from '@/pages/reward/Reward';
import AdminEventStatus from '@/pages/AdminEventStatus/AdminEventStatus';
import UploadReward from '@/pages/UploadReward/UploadReward';
import UploadPrize from '@/pages/UploadPrize/UploadPrize';

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
      {
        path: 'adminEventStatus',
        element: <AdminEventStatus />,
      },
      {
        path: 'adminEventStatus',
        element: <AdminEventStatus />,
      },
      {
        path: 'uploadReward',
        element: <UploadReward />,
      },
      {
        path: 'uploadPrize',
        element: <UploadPrize />,
      },
    ],
  },
]);

export default router;
