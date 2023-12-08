import React, { useState } from 'react';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import DataNavbar from '../../components/DataNavbar/DataNavbar';
import './DataSubmission2.css';
import camera from '../../images/camera.svg';

function DataSubmission2() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

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
            <img src={image} alt="Uploaded" />
          ) : (
            <div className="upload-placeholder">
              <img src={camera} alt="camera Logo" />
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
