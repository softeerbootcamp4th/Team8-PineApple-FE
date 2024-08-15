import React, { useState, useEffect, useContext } from 'react';
import JSZip from 'jszip';
import BlackButton from '@/components/buttons/BlackButton';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import { postQuizReward } from '@/api/UploadReward';
import ModalFrame from '@/components/modal/ModalFrame';
import { DateContext } from '@/context/dateContext';
import '@/styles/global.css';

function UploadReward() {
  const [fileCount, setFileCount] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // 파일 객체를 저장할 상태
  const [totalReward, setTotalReward] = useState(null);
  const introduce = '파일을 여기로 드래그하거나 클릭하여 선택';
  const [openModal, setOpenModal] = useState(false);
  const { dateInfo } = useContext(DateContext);

  useEffect(() => {
    setTotalReward(5); // 가져오는 api
  }, []);

  const handleClick = () => {
    if (!selectedFile) {
      setErrorMessage('업로드할 파일이 없습니다.');
      return;
    }
    setOpenModal(true);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await postQuizReward(selectedFile, dateInfo);
      setOpenModal(false);
      console.log(response);
      //확인 필요
      if (response.ok);
      else {
        setErrorMessage('파일 업로드에 실패했습니다.');
      }
    } catch (error) {
      setErrorMessage('파일 업로드 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = async files => {
    setErrorMessage('');
    setFileCount(null);
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

      // 디렉토리 파일이 포함되어 있는지 체크
      const containsDirectory = fileKeys.some(key => zipContent.files[key].dir);
      // 이후 이미지 형식의 파일만 있는지 확인하는 과정도 있으면 좋을 거 같음

      if (containsDirectory) {
        setErrorMessage(
          '디렉토리(폴더)가 포함된 ZIP 파일은 업로드할 수 없습니다. 파일만을 선택하여 압축해주세요!',
        );
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
        console.log(validFileCount);
        setErrorMessage(`파일의 개수는 ${totalReward}이어야 합니다.`);
      } else {
        setFileCount(validFileCount);
        setSelectedFile(file);
      }
    } catch (error) {
      setErrorMessage('zip 파일을 읽는 동안 오류가 발생했습니다.');
      setFileCount(null);
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

  const handleDeleteFile = () => {
    setSelectedFile(null); // 파일 객체 초기화
    setFileCount(null);
    setErrorMessage('');
  };

  return (
    <div className="w-full mt-10">
      <AdminEditHeader info="선착순 경품 코드 업로드" />
      <div className="flex flex-col items-center gap-y-4 w-full bg-neutral-white rounded-b-[10px] py-4">
        {selectedFile ? (
          <div className="text-gray-700">파일을 삭제하시려면 클릭하세요.</div>
        ) : (
          <div>
            폴더 안에 들어가서 파일만을 선택하여 압축한 zip 파일을
            업로드해주세요.
          </div>
        )}
        {errorMessage && (
          <div className="mt-2 text-red-600">{errorMessage}</div>
        )}
        {fileCount === totalReward && !errorMessage && (
          <>
            <div className="text-green-600">업로드 가능합니다.</div>
          </>
        )}
        <label
          htmlFor="file-upload"
          className="w-[85%] h-[300px] set-center border-[2px] border-dashed border-neutral-black rounded-[10px] bg-gray-100 cursor-pointer"
          onClick={selectedFile ? handleDeleteFile : null}
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
    </div>
  );
}

export default UploadReward;
