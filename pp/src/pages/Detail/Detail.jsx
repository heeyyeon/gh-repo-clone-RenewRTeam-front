// import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
// import axios from 'axios'; //*api 불러오면 주석해제
import React, { useState, useEffect } from "react"; //api 불러오면 삭제
import { useNavigate, useParams } from "react-router-dom";
import DataNavbar2 from "../../components/DataNavbar2/DataNavbar2";
import BackDataTradeList from "../../components/BackDataTradeList/BackDataTradeList";
import "./Detail.css";

function Detail() {
  const [model, setModel] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleParticipate = () => {
    navigate(`/DataSubmission/${id}`); // DataSubmission 페이지로 이동
  };

  useEffect(() => {
    const endpoint = `/collects/${id}`;

    const fetchCards = async () => {
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setModel(data);

          console.log("성공:", data);
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
    <div className="Detail-wrapper">
      <BackDataTradeList listTitle="데이터 수집 상세" />
      <div className="Detail-image">
        <div className="gradient-overlay"></div>
        <img
          src={model ? model.imageUrl : "default_image.png"}
          alt={model ? model.title : "Loading..."}
        />
      </div>
      <div className="Detail-title">
        <p>{model ? model.title : "Loading..."}</p>
      </div>
      <div className="Detail-user">
        <p style={{ color: "#6F6F6F", textAlign: "start" }}>
          {model ? model.userName : "Loading..."}
        </p>
        <p style={{ color: "#6F6F6F", textAlign: "left" }}>
          👥 {model ? model.capacity : "Loading..."}명
        </p>
        <p style={{ color: "#214FC7", textAlign: "right" }}>
          <b>💵 {model ? model.point : "Loading..."} DBC 지급</b>
        </p>
      </div>
      <div className="Detail-condition">
        <h4
          style={{ textAlign: "left", marginTop: "16px", marginLeft: "16px" }}
        >
          [사진조건]
        </h4>
        <ul>
          {/* 조건 내용을 동적으로 렌더링 */}
          {model &&
            model.requirements.map((condition, index) => (
              <li key={index} style={{ textAlign: "left" }}>
                {condition.value}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3 style={{ textAlign: "left", marginLeft: "16px" }}>소개</h3>
        <p
          style={{ textAlign: "left", marginLeft: "16px", marginRight: "16px" }}
        >
          {model ? model.content : "Loading..."}
        </p>
      </div>
      <div className="footer-button" onClick={handleParticipate}>
        참여하기
      </div>
      <DataNavbar2 />
    </div>
  );
}

export default Detail;
