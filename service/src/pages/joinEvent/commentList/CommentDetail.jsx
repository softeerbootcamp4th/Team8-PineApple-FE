import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CommentModal from '@/components/modal/CommentModal';
import { AuthContext } from '@/context/authContext';
import { getEachComment, postLike } from '@/api/comment';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import Loading from '@/assets/icons/Loading.svg';

function CommentDetail() {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const { commentId } = useParams();
  const [comment, setComment] = useState({});
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const closeCommentModal = () => {
    setOpenCommentModal(false);
    navigate(`/`);
  };

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  const handleHeart = async () => {
    if (userInfo.phoneNumber === undefined) {
      const phoneVerified = await showPhoneInputModal();
      if (!phoneVerified) {
        return;
      }
    } else {
      const newLikeStatus = !isLiked;
      setIsLiked(newLikeStatus);
      setLikeCount(prevCount => prevCount + (newLikeStatus ? 1 : -1));

      try {
        await postLike(comment.id);
      } catch (error) {
        setIsLiked(isLiked);
        setLikeCount(prevCount => prevCount + (isLiked ? 1 : -1));
        alert('네트워크 환경이 불안정합니다');
      }
    }
    setOpenCommentModal(true);
  };

  const showPhoneInputModal = () => {
    setOpenCommentModal(false);
    setOpenPhoneInputModal(true);
    return new Promise(resolve => {
      const checkPhoneVerification = () => {
        if (localStorage.getItem('userInfo')) {
          resolve(true);
          setOpenPhoneInputModal(false);
          fetchComment();
        } else {
          setTimeout(checkPhoneVerification, 1000);
        }
      };
      checkPhoneVerification();
    });
  };

  const fetchComment = async () => {
    try {
      const response = await getEachComment(commentId);
      if (response.code === 'NO_COMMENT') {
        navigate('/');
        return;
      }
      setComment(response);
      setIsLiked(response.isLiked);
      setLikeCount(response.likeCount);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch comment detail:', error);
    }
  };

  useEffect(() => {
    if (userInfo.phoneNumber !== undefined) {
      fetchComment();
    }

    fetchComment();
  }, [userInfo]);

  if (loading) {
    return (
      <div className="w-screen h-screen set-center bg-neutral-400">
        <img src={Loading} alt="Loading" className="rotate-360" />
      </div>
    );
  }

  return (
    <div>
      {openCommentModal && (
        <CommentModal
          data={comment}
          closeCommentModal={closeCommentModal}
          handleHeart={handleHeart}
          isLiked={isLiked}
          likeCount={likeCount}
        />
      )}
      {openPhoneInputModal && (
        <PhoneInputModal closePhoneModal={closePhoneModal} />
      )}
    </div>
  );
}

export default CommentDetail;
