import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { getCommentDetail } from '@/api/comment/index';
import CommentModal from '@/components/modal/CommentModal';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';

function CommentDetail() {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const { commentId } = useParams(); // Get commentId from URL params
  const [comment, setComment] = useState({
    content: '하이',
    id: 21,
    isLiked: false,
    likeCount: 1,
    phoneNumber: '010-4xxx-1xxx',
    postTime: '2024-08-17T10:30:19.44571',
  });

  const [openCommentModal, setOpenCommentModal] = useState(true);

  const closeCommentModal = () => {
    setOpenCommentModal(false);
    navigate(`/`);
  };

  const handleHeart = async () => {
    if (userInfo.phoneNumber === undefined) {
      const phoneVerified = await showPhoneInputModal();
      if (!phoneVerified) {
        return;
      }
    } else {
      setIsLiked(prev => !prev);
      setLikeCount(prevCount => prevCount + (isLiked ? -1 : 1));
      try {
        const response = await postLike(comment.id);
      } catch (error) {
        setIsLiked(isLiked);
        setLikeCount(prevCount => prevCount + (isLiked ? 1 : -1));
        alert('네트워크환경이 불안정합니다');
      }
    }
  };

  const showPhoneInputModal = () => {
    // setOpenPhoneInputModal(true);
    return new Promise(resolve => {
      const checkPhoneVerification = () => {
        if (localStorage.getItem('userInfo')) {
          resolve(true);
          //   setOpenPhoneInputModal(false);
        } else {
          setTimeout(checkPhoneVerification, 1000);
        }
      };
      checkPhoneVerification();
    });
  };

  //   useEffect(() => {
  //     const fetchComment = async () => {
  //       try {
  //         const response = await getCommentDetail(commentId);
  //         setComment(response.data);
  //       } catch (error) {
  //         console.error('Failed to fetch comment detail:', error);
  //       }
  //     };

  //     fetchComment();
  //   }, [commentId]);

  //   if (!comment) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      {openCommentModal && (
        <CommentModal
          data={comment}
          closeCommentModal={closeCommentModal}
          handleHeart={handleHeart}
        />
      )}
    </div>
  );
}

export default CommentDetail;
