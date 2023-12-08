import React, { useState } from 'react';
import './Delete.css'; 
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList'; 
import DataNavbar from '../../components/DataNavbar/DataNavbar'; ;


function Delete() {
  const [image, setImage] = useState('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTBfODcg%2FMDAxNjk5NTg1ODY4Mzcz.TDhp9IF3JpEmdcryX5Sj3eP69RxQBIBBxz-N4Rbk2VIg.bO3a3_R5kBasub2IlbIHA7QYqhbxQv-FMgr0U-UTnbgg.JPEG.eh60135%2F%25B8%25D5%25C4%25A1%25C5%25B2%25B0%25ED%25BE%25E7%25C0%25CC%25C1%25BE%25B7%25F914.jpg&type=a340'); // 이미지 URL
  const [description, setDescription] = useState('저희집 고양이입니다! 예쁘게 봐주세요 :)'); // 설명 텍스트

  // 이미지와 설명을 제출하는 함수 (여기서는 콘솔 로그로 대체)
  const handleSubmit = () => {
    console.log('Image URL:', image);
    console.log('Description:', description);
  };

  return (
    <div className="data-submission-container">
      <BackDataTradeList />
      <div className="image-preview-container">
        <img src={image || 'default_image_path'} alt="Preview" />
      </div>
      <textarea
        className="description-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // placeholder="자세한 설명이 필요합니다! 이곳에 써주세요 :)"
      />
      <button className="submit-button" onClick={handleSubmit}>원본 글 보러가기</button>
      <button className="cancel-button">취소하기</button>
      <DataNavbar />
    </div>
  );
}

export default Delete;
