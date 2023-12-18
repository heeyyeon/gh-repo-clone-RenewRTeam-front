import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; //*api 불러오면 주석해제
// import React, { useState } from 'react'; //api 불러오면 삭제
import { Link, useNavigate } from "react-router-dom";
import "./DetailCollector.css";
import BackDataTradeList from "../../components/BackDataTradeList/BackDataTradeList";
import DataNavbar from "../../components/DataNavbar/DataNavbar";

function DetailCollector() {
  const navigate = useNavigate();

  const handlemanagebutton = () => {
    navigate(`/CardListCollector2/${id}`);
  };

  // 임시 데이터로 상태 초기화
  // const [model] = useState({
  //     image: 'https://via.placeholder.com/150',
  //     title: '임시 제목',
  //     userName: '사용자 이름',
  //     participantCount: '100',
  //     reward: '50',
  //     conditions: ['고양이 전신 사진이 촬영되어야 합니다.'],
  //     description: '😎 안녕하세요. 저희는 고양이 전신 사진을 100장 정도 확보하는 것을 목표로 하고 있습니다...',
  // });

  // function Detail() {
  const [model, setModel] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const endpoint = `/collects/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": `application/json;charset=UTF-8`,
            Accept: "application/json",
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setModel(data.data);

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

    fetchData();
  }, []); //*api 불러오면 주석해제

  return (
    <>
      <BackDataTradeList />
      <div className="Detail-wrapper">
        <div className="Detail-image">
          <div className='gradient-overlay'></div>
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
          <ul style={{ padding: "0px 16px 16px 25px" }}>
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
            style={{
              textAlign: "left",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            {model ? model.content : "Loading..."}
          </p>
        </div>
        <div className="footer-button" onClick={handlemanagebutton}>
          수집 데이터 관리
        </div>
      </div>
      <DataNavbar />
    </>
  );
}

export default DetailCollector;
