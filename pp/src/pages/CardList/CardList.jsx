import React, { useState, useEffect } from "react"; //api 받아오면 삭제하기
// import React, { useEffect, useState } from 'react'; //api 받아오면 주석 풀기
import { Link } from "react-router-dom";
// import axios from 'axios';  //api 받아오면 주석 풀기
import Card from "../../components/Card/Card";
import DataTradeList from "../../components/DataTradeList/DataTradeList";
import "./CardList.css";
import DataNavbar2 from "../../components/DataNavbar2/DataNavbar2";

function CardList({ listTitle }) {
  // 임시 데이터로 상태 초기화
  // const [cards] = useState([
  //   {
  //     id: 1,
  //     image: 'https://via.placeholder.com/150',
  //     title: '카드 제목 1',
  //     description: '설명 1',
  //     limit: '제한 1',
  //   },
  //   {
  //     id: 2,
  //     image: 'https://via.placeholder.com/150',
  //     title: '카드 제목 2',
  //     description: '설명 2',
  //     limit: '제한 2',
  //   },
  //   {
  //     id: 3,
  //     image: 'https://via.placeholder.com/150',
  //     title: '카드 제목 3',
  //     description: '설명 3',
  //     limit: '제한 3',
  //   },
  //   // 추가 카드 데이터...
  // ]);

  const [cards, setCards] = useState([]); // 카드 데이터를 상태로 관리
  const endpoint = "/collects/myCollect";

  useEffect(() => {
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
          setCards(data);

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
  }, []); //*api 받아오면 더미데이터 지우고 주석 풀기

  return (
    <>
      <DataTradeList listTitle={"데이터 거래 목록"} />
      <div className="card-list">
        {cards.map((card, index) => (
          <Link key={index} to={`/detail/${card.id}`}>
            {" "}
            {/* id 값을 URL에 포함 */}
            <Card
              id={card.id}
              image={card.imageUrl}
              title={card.title}
              description={card.userName}
              limit={card.capacity}
            />
          </Link>
        ))}
      </div>
      <DataNavbar2 />
    </>
  );
}

export default CardList;
