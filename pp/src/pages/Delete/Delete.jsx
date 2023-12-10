import React from 'react';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import DataNavbar from '../../components/DataNavbar/DataNavbar';
import './Delete.css';

function Delete() {
  const image = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTBfODcg%2FMDAxNjk5NTg1ODY4Mzcz.TDhp9IF3JpEmdcryX5Sj3eP69RxQBIBBxz-N4Rbk2VIg.bO3a3_R5kBasub2IlbIHA7QYqhbxQv-FMgr0U-UTnbgg.JPEG.eh60135%2F%25B8%25D5%25C4%25A1%25C5%25B2%25B0%25ED%25BE%25E7%25C0%25CC%25C1%25BE%25B7%25F914.jpg&type=a340'; // 예시 이미지 URL
  const description = '저희집 고양이입니다! 예쁘게 봐주세요 :)'; // 예시 설명 텍스트

  const handleDelete = () => {
    const isConfirmed = window.confirm('정말로 이 사진을 삭제하시겠습니까?');
    if (isConfirmed) {
      console.log('사진이 삭제되었습니다.');
    }
  };

  return (
    <div className="delete-container">
      <BackDataTradeList listTitle="내가 작성한 제공 데이터" />
      <div className="image-container">
        <img src={image} alt="Uploaded" className="uploaded-image" />
        <p className="description">{description}</p> 
      </div>
      <button className="view-button">원본 글 보러가기</button>
      <button onClick={handleDelete} className="delete-button">삭제</button>
      <DataNavbar />
    </div>
  );
}

export default Delete;
