import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function useScroll() {
  const location = useLocation();
  const mainRef = useRef(null);
  const worldCupRef = useRef(null);
  const miniQuizRef = useRef(null);
  const dailyCommentRef = useRef(null);
  const commentIndexRef = useRef(null);

  useEffect(() => {
    const { state } = location;
    const section = state?.scrollTo;

    switch (section) {
      case 'main':
        mainRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'worldCup':
        worldCupRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'miniQuiz':
        miniQuizRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'dailyComment':
        dailyCommentRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'commentIndex':
        commentIndexRef.current?.scrollIntoView({ behavior: 'smooth' });
      default:
        break;
    }
  }, [location]);

  return {
    refs: {
      mainRef,
      worldCupRef,
      miniQuizRef,
      dailyCommentRef,
      commentIndexRef,
    },
  };
}

export default useScroll;
