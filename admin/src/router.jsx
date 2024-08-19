import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import MiniQuiz from '@/pages/miniQuiz/MiniQuiz';
import MiniQuizAnswer from '@/pages/miniQuizAnswer/MiniQuizAnswer';
import Draw from '@/pages/draw/Draw';
import Reward from '@/pages/reward/Reward';
import Probability from '@/pages/probability/Probability';
import AdminEventStatus from '@/pages/AdminEventStatus/AdminEventStatus';
import UploadReward from '@/pages/UploadReward/UploadReward';
import UploadPrize from '@/pages/UploadPrize/UploadPrize';
import Login from '@/pages/login/Login';
import ProtectedRoute from '@/pages/ProtectedRoute';
import ErrorPage from '@/pages/ErrorPage';
import Indicator from '@/pages/Indicator/Indicator';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />, // Login 페이지를 루트로 설정
  },
  {
    path: '/',
    element: <App />,
    children: {
      path: 'error',
      element: <ErrorPage />,
    },
  },
  {
    path: '/:date',
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
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
            path: 'probability',
            element: <Probability />,
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
          {
            path: 'Indicator',
            element: <Indicator />,
          },
        ],
      },
    ],
  },
]);

export default router;
