import React, { useState, useEffect, useContext } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import AdminEditDrawContent from './DrawContent';
import BlackButton from '@/components/buttons/BlackButton';
import { getAdminDraw, putAdminDraw } from '@/api/draw/index';
import { DateContext } from '@/context/dateContext';
import useFetch from '@/hooks/useFetch';
import ModalFrame from '@/components/modal/ModalFrame';
import useFormData from '@/hooks/useFormData';

function Draw() {
  const { dateInfo } = useContext(DateContext);
  const {
    data: initialData,
    loading,
    error,
    refetch,
  } = useFetch(getAdminDraw, dateInfo);
  const [drawData, setDrawData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const createFormData = useFormData();

  useEffect(() => {
    if (initialData) {
      if (initialData.code === 'NO_DAILY_INFO') {
        setDrawData({
          drawDate: '',
          loseImage: '',
          loseMessage: '',
          loseScenario: '',
          winImage: '',
          winMessage: '',
          commonScenario: '',
        });
      } else {
        setDrawData(initialData);
      }
    }
  }, [initialData]);

  const handleChange = (key, value) => {
    setDrawData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    const formData = createFormData(drawData);
    const response = await putAdminDraw(formData);
    console.log(response);
    if (response.status === 200) {
      await refetch();
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

  if (!drawData) {
    return <div>No draw data available</div>;
  }

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader info="응모 결과 수정" />
      <div className="flex-col w-[100%] set-center bg-neutral-white rounded-b-[10px] py-1000">
        <AdminEditDrawContent response={drawData} onChange={handleChange} />
        <BlackButton value="수정하기" onClickFunc={() => setOpenModal(true)} />
      </div>
      {openModal && (
        <ModalFrame
          text="정말 응모 결과를 수정하실 건가요?"
          onClickNo={() => setOpenModal(false)}
          onClickYes={handleSubmit}
        />
      )}
    </div>
  );
}

export default Draw;
