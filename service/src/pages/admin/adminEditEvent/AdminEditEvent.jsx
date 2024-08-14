import React from 'react';
import AdminEditMiniQuiz from './adminEditMiniQuiz/AdminEditMiniQuiz';
import AdminEditMiniQuizAnswer from './adminEditMiniQuizAnswer/AdminEditMiniQuizAnswer';

function AdminEditEvent() {
  return (
    <div className="w-[90%] flex flex-col items-center gap-1000">
      <AdminEditMiniQuiz />
      <AdminEditMiniQuizAnswer />
    </div>
  );
}

export default AdminEditEvent;
