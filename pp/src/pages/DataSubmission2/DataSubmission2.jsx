import React, { useState } from 'react';
// 상단 데이터 제공 컴포넌트, 하단 버튼, 하단바 컴포넌트를 import 합니다.
import { useNavigate } from 'react-router-dom';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import DataNavbar2 from '../../components/DataNavbar2/DataNavbar2';
import './DataSubmission.css';
import camera from '../../images/camera.svg';

function DataSubmission() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // 이미지 파일 처리 함수
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // 폼 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image, description);
    navigate('/cardlist'); // CardList 페이지로 이동
  };

  return (
    <div className="data-submission-container">
      <BackDataTradeList listTitle="데이터 제공" />
      <form onSubmit={handleSubmit} className="submission-form">
        <div className="image-upload-section" onClick={() => document.getElementById('image-input').click()}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Uploaded" />
          ) : (
            <div className="upload-placeholder">
              <img src={camera} alt="camera Logo" />
              <span>여기를 클릭해서 사진을 추가하세요!</span>
            </div>
          )}
          <input
            id="image-input"
            type="file"
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
         <button type="submit" style={{ backgroundColor: image ? '#214FC7' : '#A5A5A5' }}>참여하기</button>
      </div>
      </form>
      <DataNavbar2 />
    </div>
  );
}

export default DataSubmission;