import React, { useState, useContext } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import BlackButton from '@/components/buttons/BlackButton';
import ModalFrame from '@/components/modal/ModalFrame';
import { postQuizReward } from '@/api/UploadReward';
import { DateContext } from '@/context/dateContext';
import useFormData from '@/hooks/useFormData';
import useNavigationBlocker from '@/hooks/useNavigationBlocker';
import JSZip from 'jszip';

function UploadReward() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // 파일 객체를 저장할 상태
  const introduce = '파일을 여기로 드래그하거나 클릭하여 선택';
  const [openModal, setOpenModal] = useState(false);
  const { dateInfo } = useContext(DateContext);
  const [processMessage, setProcessMessage] = useState(
    '폴더 안에 들어가서 파일만을 선택하여 압축한 zip 파일을 업로드해주세요.',
  );

  const totalReward = 500;
  const createFormData = useFormData();

  const {
    unsavedChangesModal,
    handleConfirmNavigation,
    handleCancelNavigation,
  } = useNavigationBlocker(selectedFile, () => {
    setSelectedFile(null);
  });

  const handleClick = () => {
    if (!selectedFile) {
      setErrorMessage('업로드할 파일이 없습니다.');
      return;
    }
    setOpenModal(true);
  };

  const handleSubmit = async () => {
    const body = createFormData({
      file: selectedFile,
      quizDate: dateInfo,
    });
    console.log(body);
    try {
      setIsLoading(true);
      const response = await postQuizReward(body);
      console.log(response);
      setOpenModal(false);
      if (response.message === 'success') {
        setProcessMessage('파일 업로드를 완료했습니다.');
      } else {
        setErrorMessage(`${response.message}`);
      }
    } catch (error) {
      setErrorMessage('파일 업로드 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
      setSelectedFile(null);
    }
  };

  const handleFileChange = async files => {
    if (!files.length) return;
    setModified(true);
    setErrorMessage('');
    setIsLoading(true);

    if (files.length > 1) {
      setErrorMessage('zip 파일 한 개만 업로드 가능합니다.');
      setIsLoading(false);
      return;
    }

    const file = files[0];
    if (!file) {
      setErrorMessage(
        '파일 업로드 과정에서 오류가 있습니다. 다시 시도 부탁드립니다.',
      );
      setIsLoading(false);
      return;
    }

    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (fileExtension !== 'zip') {
      setErrorMessage(
        '확장자는 대소문자 상관없이 zip이어야 합니다. 확장자를 다시 확인 부탁드립니다.',
      );
      setIsLoading(false);
      return;
    }

    try {
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(file);
      const fileKeys = Object.keys(zipContent.files);

      // 디렉토리 파일이 포함되어 있거나, 허용되지 않은 확장자가 포함된 경우 체크
      const hasInvalidFiles = fileKeys.some(key => {
        if (zipContent.files[key].dir) {
          setErrorMessage(
            '디렉토리(폴더)가 포함된 ZIP 파일은 업로드할 수 없습니다. 파일만을 선택하여 압축해주세요!',
          );
          return true; // 디렉토리 포함
        }

        const fileExt = key.split('.').pop().toLowerCase();
        if ('jpg' !== fileExt) {
          setErrorMessage(
            `파일 형식은 'jpg'만 가능합니다. ${fileExt} 형식 파일이 있습니다.`,
          );
          return true; // 허용되지 않은 확장자 포함
        }

        return false;
      });

      if (hasInvalidFiles) {
        setIsLoading(false);
        return;
      }

      const validFileCount = fileKeys.reduce((count, key) => {
        if (!key.startsWith('__MACOSX/')) {
          return count + 1;
        }
        return count;
      }, 0);

      if (validFileCount === 0) {
        setErrorMessage('ZIP 파일이 비어 있습니다.');
      } else if (validFileCount !== totalReward) {
        setErrorMessage(`파일의 개수는 ${totalReward}이어야 합니다.`);
      } else {
        setProcessMessage('업로드 가능합니다.');
        setSelectedFile(file);
      }
    } catch (error) {
      setErrorMessage('zip 파일을 읽는 동안 오류가 발생했습니다.');
    }
    setIsLoading(false);
  };

  const handleDrop = event => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileChange(files);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  return (
    <div className="w-full mt-10">
      <AdminEditHeader info="선착순 경품 코드 업로드" />
      <div className="flex flex-col items-center gap-y-4 w-full bg-neutral-white rounded-b-[10px] py-4">
        {errorMessage && (
          <div className="mt-2 text-red-600">{errorMessage}</div>
        )}
        {!errorMessage && (
          <div className="text-green-600">{processMessage}</div>
        )}
        <label
          htmlFor="file-upload"
          className="w-[85%] h-[300px] set-center border-[2px] border-dashed border-neutral-black rounded-[10px] bg-gray-100 cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            accept=".zip"
            onChange={e => handleFileChange(e.target.files)}
            className="hidden"
            id="file-upload"
          />
          {!isLoading && (
            <div style={{ whiteSpace: 'pre-line' }}>
              {selectedFile?.name || introduce}
            </div>
          )}
          {isLoading && <div className="mt-2 loader">Loading...</div>}
        </label>
        <BlackButton value="등록하기" onClickFunc={handleClick} />
      </div>
      {openModal && (
        <ModalFrame
          text="정말로 등록하시겠습니까??"
          onClickNo={() => setOpenModal(false)}
          onClickYes={() => handleSubmit()}
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

export default UploadReward;
