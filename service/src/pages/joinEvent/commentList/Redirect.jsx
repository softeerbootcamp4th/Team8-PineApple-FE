import React, { useEffect } from 'react';
import { getRedirectLink } from '@/api/comment/index';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '@/assets/icons/Loading.svg';

function Redirect() {
  const navigate = useNavigate();
  const { commentId } = useParams();
  const getLink = async () => {
    const response = await getRedirectLink(commentId);
    navigate(`/${response.originalUrl}`);
  };

  useEffect(() => {
    getLink();
  }, []);

  return (
    <div className="w-screen h-screen set-center bg-neutral-400">
      <img src={Loading} alt="Loading" className="rotate-360" />
    </div>
  );
}

export default Redirect;
