import { useEffect } from 'react';
import { getRedirectLink } from '@/api/comment/index';
import { useParams } from 'react-router-dom';

function Redirect() {
  const { commentId } = useParams();
  console.log(commentId);
  const getLink = async () => {
    await getRedirectLink(commentId);
  };

  useEffect(() => {
    getLink();
  }, []);
}

export default Redirect;
