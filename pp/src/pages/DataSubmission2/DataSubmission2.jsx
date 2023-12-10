import React, { useState } from 'react';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import DataNavbar from '../../components/DataNavbar/DataNavbar';
import './DataSubmission2.css';
import camera from '../../images/camera.svg';

function DataSubmission2() {
  // const [image, setImage] = useState(null);
  // const [description, setDescription] = useState('');
  const [image, setImage] = useState('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTBfODcg%2FMDAxNjk5NTg1ODY4Mzcz.TDhp9IF3JpEmdcryX5Sj3eP69RxQBIBBxz-N4Rbk2VIg.bO3a3_R5kBasub2IlbIHA7QYqhbxQv-FMgr0U-UTnbgg.JPEG.eh60135%2F%25B8%25D5%25C4%25A1%25C5%25B2%25B0%25ED%25BE%25E7%25C0%25CC%25C1%25BE%25B7%25F914.jpg&type=a340'); // 이미지 URL
  const [description, setDescription] = useState('저희집 고양이입니다! 예쁘게 봐주세요 :)'); // 설명 텍스트 <--임의로 넣음
  // 향후 서버로부터 이미지를 업로드하거나 상태를 업데이트하는 로직을 구현할 때 setImage 함수를 사용할 예정(아직 warning)

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이미지와 설명 데이터 처리 로직 구현
    console.log(image, description);
    // 이 부분에서 서버로 이미지와 설명을 보내는 서버로 데이터를 보내는 API 호출 구현
  };

  return (
    <div className="data-submission-container">
      <BackDataTradeList listTitle="데이터 제공" />
      <form onSubmit={handleSubmit} className="submission-form">
      <div className="image-upload-section" onClick={() => document.getElementById('image-input').click()}>
      {image ? (
          // 이미지가 있을 때, 이미지를 표시
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          // 이미지가 없을 때, 카메라 아이콘과 텍스트를 표시하는 플레이스홀더 보여줌
          <div className="upload-placeholder">
            <img src={camera} alt="camera Logo" className="camera-icon" />
            여기를 클릭해서 사진을 추가해주세요!
          </div>
        )}
        <input
          id="image-input"
          type="file"
          accept="image/*" 
          capture="camera"
          onChange={handleImageChange}
          hidden
        />
      </div>
        <textarea
          className="description-input"
          placeholder="내용 (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <div className="Next-button">
        <button type="submit">참여하기</button>
      </div>
      </form>
      <DataNavbar />
    </div>
  );
}

export default DataSubmission2;
