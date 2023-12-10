import React, { useState } from 'react';
import './DataSubmissionForm.css'; 
import DataNavbar from '../../components/DataNavbar/DataNavbar';

function DataSubmissionForm() {
  const [image, setImage] = useState(''); 
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [licenseInfo, setLicenseInfo] = useState(''); 

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 구현
    console.log(image, title, content, licenseInfo);
  };

  return (
    <div className="data-submission-form-container">
      <div className="image-preview">
        {image ? (
          <img src={image} alt="Preview" />
        ) : (
          <div className="image-placeholder">사진 미리보기</div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>기본 정보</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
        />
        <label>라이센스 정보</label>
        <input
          type="text"
          value={licenseInfo}
          onChange={(e) => setLicenseInfo(e.target.value)}
          placeholder="라이선스"
        />
        <button type="submit">저장</button>
      </form>
      <DataNavbar />
    </div>
  );
}

export default DataSubmissionForm;
