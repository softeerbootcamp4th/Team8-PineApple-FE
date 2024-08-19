import { useEffect } from 'react';
import { getRedirectLink } from '@/api/comment/index';
import { useParams } from 'react-router-dom';

function Redirect() {
  const { commentId } = useParams();
  console.log(commentId);
  const getLink = async () => {
    const response = await getRedirectLink(commentId);
    console.log(response);
  };

  useEffect(() => {
    getLink();
  }, []);
}

export default Redirect;
