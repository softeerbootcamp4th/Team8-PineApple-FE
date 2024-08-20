import { useEffect } from 'react';
import { getRedirectLink } from '@/api/comment/index';
import { useParams, useNavigate } from 'react-router-dom';

function Redirect() {
  const navigate = useNavigate();
  const { commentId } = useParams();
  console.log(commentId);
  const getLink = async () => {
    const response = await getRedirectLink(commentId);
    console.log(response);
    navigate(response);
  };

  useEffect(() => {
    getLink();
  }, [commentId]);
}

export default Redirect;
