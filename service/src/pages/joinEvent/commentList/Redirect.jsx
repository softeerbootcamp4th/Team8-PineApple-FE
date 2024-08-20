import { useEffect } from 'react';
import { getRedirectLink } from '@/api/comment/index';
import { useParams, useNavigate } from 'react-router-dom';

function Redirect() {
  const navigate = useNavigate();
  const { commentId } = useParams();
  const getLink = async () => {
    const response = await getRedirectLink(commentId);
    console.log(response.originalUrl);
    navigate(response.originalUrl);
  };

  useEffect(() => {
    getLink();
  }, [commentId]);
}

export default Redirect;
