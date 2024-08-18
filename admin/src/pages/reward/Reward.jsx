import React, { useState, useEffect } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import RewardContent from './RewardContent';
import BlackButton from '@/components/buttons/BlackButton';
import { getAdminReward, putAdminReward } from '@/api/reward/index';
import useFetch from '@/hooks/useFetch';
import ModalFrame from '@/components/modal/ModalFrame';
import useRewardFormData from '@/hooks/useRewardFormData';
import useNavigationBlocker from '@/hooks/useNavigationBlocker';
import useBeforeUnload from '@/hooks/useBeforeUnload';

function Reward() {
  const {
    data: initialData,
    loading,
    error,
    refetch,
  } = useFetch(getAdminReward);
  const [rewardData, setRewardData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const createFormData = useRewardFormData();
  const [modified, setModified] = useState(false);

  useBeforeUnload();

  const {
    unsavedChangesModal,
    handleConfirmNavigation,
    handleCancelNavigation,
  } = useNavigationBlocker(modified, () => {
    setModified(false);
  });

  useEffect(() => {
    if (initialData) {
      setRewardData(initialData.rewards);
    }
  }, [initialData]);

  const handleChange = (index, field, value) => {
    setModified(true);
    setRewardData(prevState =>
      prevState.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const handleSubmit = async () => {
    const formData = createFormData(rewardData);
    try {
      const response = await putAdminReward(formData);
      if (response.status === 200) {
        await refetch();
        setModified(false);
      } else {
        alert('수정이 불가능합니다!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버와의 통신 중 오류가 발생했습니다.');
    }

    setOpenModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!rewardData) {
    return <div>No reward data available</div>;
  }

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader info="상품 목록 수정" />
      <div className="flex-col w-[100%] set-center bg-neutral-100 rounded-b-[10px] py-1000">
        <RewardContent response={rewardData} onChange={handleChange} />
        <BlackButton value="수정하기" onClickFunc={() => setOpenModal(true)} />
      </div>
      {openModal && (
        <ModalFrame
          text="정말 응모 결과를 수정하실 건가요?"
          onClickNo={() => setOpenModal(false)}
          onClickYes={handleSubmit}
        />
      )}
      {unsavedChangesModal && (
        <ModalFrame
          text="지금 페이지를 나가시면 작성중인 내용이 삭제됩니다. 정말 페이지를 나가시겠습니까?"
          onClickNo={handleCancelNavigation}
          onClickYes={handleConfirmNavigation}
        />
      )}
    </div>
  );
}

export default Reward;
