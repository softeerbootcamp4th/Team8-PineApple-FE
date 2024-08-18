import React, { useState, useEffect } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import ProbabilityContent from './ProbabilityContent';
import BlackButton from '@/components/buttons/BlackButton';
import {
  getAdminProbability,
  putAdminProbability,
} from '@/api/probability/index';
import useFetch from '@/hooks/useFetch';
import ModalFrame from '@/components/modal/ModalFrame';
import useNavigationBlocker from '@/hooks/useNavigationBlocker';
import useBeforeUnload from '@/hooks/useBeforeUnload';

function Probability() {
  const {
    data: initialData,
    loading,
    error,
    refetch,
  } = useFetch(getAdminProbability);
  const [probabilityData, setProbabilityData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
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
      setProbabilityData(initialData);
    }
  }, [initialData]);

  const handleChange = (key, value) => {
    setModified(true);
    setProbabilityData(prevState => ({
      probabilities: {
        ...prevState.probabilities,
        [key]: Number(value),
      },
    }));
  };

  const handleSubmit = async () => {
    const response = await putAdminProbability(probabilityData);
    if (response.status === 200) {
      await refetch();
      setModified(false);
    } else {
      alert('수정이 불가능합니다!');
    }
    setOpenModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!probabilityData) {
    return <div>No probability data available</div>;
  }

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader info="응모 당첨 확률 수정" />
      <div className="flex-col w-[100%] set-center bg-neutral-white rounded-b-[10px] py-1000">
        <ProbabilityContent
          response={probabilityData}
          onChange={handleChange}
        />
        <BlackButton value="수정하기" onClickFunc={() => setOpenModal(true)} />
      </div>
      {openModal && (
        <ModalFrame
          text="정말 응모당첨 확률을 수정하실 건가요?"
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

export default Probability;
