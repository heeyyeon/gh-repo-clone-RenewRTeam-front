// import React from 'react';
// import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
// import DataNavbar from '../../components/DataNavbar/DataNavbar';
// import Modal from '../../components/Modal/Modal';
// import './Delete.css';

// function Delete() {
//   const image = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTBfODcg%2FMDAxNjk5NTg1ODY4Mzcz.TDhp9IF3JpEmdcryX5Sj3eP69RxQBIBBxz-N4Rbk2VIg.bO3a3_R5kBasub2IlbIHA7QYqhbxQv-FMgr0U-UTnbgg.JPEG.eh60135%2F%25B8%25D5%25C4%25A1%25C5%25B2%25B0%25ED%25BE%25E7%25C0%25CC%25C1%25BE%25B7%25F914.jpg&type=a340'; // 예시 이미지 URL
//   const description = '저희집 고양이입니다! 예쁘게 봐주세요 :)'; // 예시 설명 텍스트

//   const handleDelete = () => {
//     const isConfirmed = window.confirm('정말로 이 사진을 삭제하시겠습니까?');
//     if (isConfirmed) {
//       console.log('사진이 삭제되었습니다.');
//     }
//   };

//   return (
//     <div className="delete-container">
//       <BackDataTradeList listTitle="내가 작성한 제공 데이터" />
//       <div className="image-container">
//         <img src={image} alt="Uploaded" className="uploaded-image" />
//         <p className="description">{description}</p> 
//       </div>
//       <button className="view-button">원본 글 보러가기</button>
//       <button onClick={handleDelete} className="delete-button">삭제</button>
//       <DataNavbar />
//     </div>
//   );
// }

// export default Delete;

// import React, { useState } from 'react';
// import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
// import DataNavbar from '../../components/DataNavbar/DataNavbar';
// import Modal from '../../components/Modal/Modal';
// import './Delete.css';

// function Delete() {
//   const image = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTBfODcg%2FMDAxNjk5NTg1ODY4Mzcz.TDhp9IF3JpEmdcryX5Sj3eP69RxQBIBBxz-N4Rbk2VIg.bO3a3_R5kBasub2IlbIHA7QYqhbxQv-FMgr0U-UTnbgg.JPEG.eh60135%2F%25B8%25D5%25C4%25A1%25C5%25B2%25B0%25ED%25BE%25E7%25C0%25CC%25C1%25BE%25B7%25F914.jpg&type=a340'; // 예시 이미지 URL
//   const description = '저희집 고양이입니다! 예쁘게 봐주세요 :)'; // 예시 설명 텍스트

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleDelete = () => {
//     // 사용자에게 삭제 확인을 요청합니다.
//     setIsModalVisible(true);
//   };

//   const handleConfirmDelete = () => {
//     console.log('사진이 삭제되었습니다.');
//     setIsModalVisible(false);
//     // 삭제 로직을 구현합니다. 예를 들어, API 호출 등...
//   };

//   const handleCancelDelete = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div className="delete-container">
//       <BackDataTradeList listTitle="내가 작성한 제공 데이터" />
//       <div className="image-container">
//         <img src={image} alt="Uploaded" className="uploaded-image" />
//         <p className="description">{description}</p> 
//       </div>
//       <button className="view-button">원본 글 보러가기</button>
//       <button onClick={handleDelete} className="delete-button">삭제</button>
//       {isModalVisible && (
//         <Modal
//           onConfirm={handleConfirmDelete}
//           onCancel={handleCancelDelete}
//         />
//       )}
//       <DataNavbar />
//     </div>
//   );
// }

// export default Delete;

import React, { useEffect, useState } from 'react';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import DataNavbar2 from '../../components/DataNavbar2/DataNavbar2';
import Modal from '../../components/Modal/Modal';
import './Delete.css';
import { useNavigate, useParams } from 'react-router-dom';

function Delete() {
  const [model, setModel] = useState(null);
  const {id} = useParams();
  
  // 상태 변수
  const navigate = useNavigate();

  const handleViewOriginal = () => {
      navigate('/CardListTag'); // CardListTag 컴포넌트로 이동
  };

  const image = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTBfODcg%2FMDAxNjk5NTg1ODY4Mzcz.TDhp9IF3JpEmdcryX5Sj3eP69RxQBIBBxz-N4Rbk2VIg.bO3a3_R5kBasub2IlbIHA7QYqhbxQv-FMgr0U-UTnbgg.JPEG.eh60135%2F%25B8%25D5%25C4%25A1%25C5%25B2%25B0%25ED%25BE%25E7%25C0%25CC%25C1%25BE%25B7%25F914.jpg&type=a340'; // 예시 이미지 URL
  const description = '저희집 고양이입니다! 예쁘게 봐주세요 :)'; // 예시 설명 텍스트
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 삭제 버튼 핸들러
  const handleDelete = () => {
    setIsModalVisible(true); // 모달 활성화
  };

  const handleConfirmDelete = () => {
    console.log('사진이 삭제되었습니다.');
    setIsModalVisible(false); // 모달 비활성화
    navigate('/CardListTag'); // CardListTag 컴포넌트로 이동
};

  // 모달에서 삭제를 취소하는 핸들러
  const handleCancelDelete = () => {
    setIsModalVisible(false); // 모달 비활성화
  };

  useEffect(() => {
    const endpoint = `/offers/${id}`;

    const fetchCards = async () => {
      try {
        const response = await fetch(endpoint, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
          },
        });

        if(response.ok) {
          const data = await response.json();
          setModel(data.data);

          console.log("성공:" , data);
        } else {
          const errorText = await response.text();
          alert(`실패: ${errorText}`);
        }
      } catch (error) {
        alert("오류가 발생했습니다.");
        console.error("API 호출 중 오류 발생:", error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className={`delete-container ${isModalVisible ? 'backdrop' : ''}`}>
      <BackDataTradeList listTitle="내가 작성한 제공 데이터" />
      <div className="image-container">
        <img src={image} alt="Uploaded" className="uploaded-image" />
        <p className="description">{description}</p> 
      </div>
      <button onClick={handleViewOriginal} className="view-button">원본 글 보러가기</button>
      <button onClick={handleDelete} className="delete-button">삭제</button>
      {isModalVisible && (
        <Modal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          msg={"데이터를 삭제하시겠습니까?"}
        />
      )}
      <DataNavbar2 />
    </div>
  );
}

export default Delete;