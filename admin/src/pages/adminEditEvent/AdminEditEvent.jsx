import React from 'react';
import AdminEditMiniQuiz from './adminEditMiniQuiz/AdminEditMiniQuiz';
import AdminEditMiniQuizAnswer from './adminEditMiniQuizAnswer/AdminEditMiniQuizAnswer';
import AdminEditDraw from './adminEditDraw/AdminEditDraw';

function AdminEditEvent() {
  return (
    <div className="w-[90%] flex flex-col items-center pb-2000">
      <AdminEditMiniQuiz />
      <AdminEditMiniQuizAnswer />
      <AdminEditDraw />
    </div>
  );
}

export default AdminEditEvent;
