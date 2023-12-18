// import React, { useState } from 'react'; //api 받아오면 삭제하기
import React, { useEffect, useState } from "react"; //api 받아오면 주석 풀기
import { Link, useParams } from "react-router-dom";
import axios from "axios"; //api 받아오면 주석 풀기
import Card2 from "../../components/Card2/Card2";
import "./CardListCollector2.css";
import BackDataTradeList from "../../components/BackDataTradeList/BackDataTradeList";
import DataNavbar from "../../components/DataNavbar/DataNavbar";
import Modal from "../../components/Modal/Modal";

function CardListCollector2({ listTitle }) {
  // 임시 데이터로 상태 초기화
  // const [cards] = useState([
  //   {
  //     id: 1,
  //     image: 'https://via.placeholder.com/150',
  //     tag: '대기'
  //   },
  //   {
  //     id: 2,
  //     image: 'https://via.placeholder.com/150',
  //     tag: '승인'
  //   },
  //   {
  //     id: 3,
  //     image: 'https://via.placeholder.com/150',
  //     tag: '승인'
  //   },
  //   // 추가 카드 데이터...
  // ]);

  // function CardList({ listTitle }) {
  const [cards, setCards] = useState([]); // 카드 데이터를 상태로 관리
  const [cardId, setCardId] = useState("");
  const [selectedCard, setSelectedCard] = useState(null); // 선택된 카드 상태 추가
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();
  const [status, setStatus] = useState(["대기"]);

  const updateStatus = (isApproved) => {
    setStatus(isApproved ? "승인" : "거절");
  };

  // 클릭한 카드의 상태를 업데이트하는 함수
  const updateCardStatus = (status) => {
    // 여기에서 API 호출 또는 상태 업데이트 등의 로직을 추가할 수 있습니다.
    console.log(`카드 상태를 ${status}로 업데이트합니다.`);
    // 예시로 클릭한 카드의 상태를 업데이트합니다.

    setStatus(true);
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === selectedCard ? { ...card, tag: status } : card
      )
    );
  };

  const handleCardClick = (cardId) => {
    console.log("클릭");
    setCardId(cardId);
    setSelectedCard(cardId);
    setIsModalVisible(true);
  };

  // 모달에서 승인 버튼 핸들러
  const handleConfirmReward = async () => {
    const endpoint = "/collects/allow/" + cardId;
    console.log(cardId);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.sessionStorage.getItem("token"),
        },
      });
    } catch (error) {
      alert("오류가 발생했습니다.");
      console.error("API 호출 중 오류 발생:", error);
    }

    console.log("리워드 결정이 승인됐습니다.");
    updateCardStatus("승인");
    // updateStatus(true);  // 승인
    setIsModalVisible(false);
    window.location.reload();
  };

  // 모달에서 거절 버튼 핸들러
  const handleRejectReward = async () => {
    const endpoint = "/collects/reject/" + cardId;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.sessionStorage.getItem("token"),
        },
      });
    } catch (error) {
      alert("오류가 발생했습니다.");
      console.error("API 호출 중 오류 발생:", error);
    }
    updateCardStatus("거절");
    // updateStatus(false);  // 거절
    setIsModalVisible(false);
    window.location.reload();
  };

  useEffect(() => {
    const endpoint = `/collections/${id}`;

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
          setCards(data.data);

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
      <BackDataTradeList listTitle="데이터 수집 목록" />
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} onClick={() => handleCardClick(card.id)}>
            {" "}
            {/* id 값을 URL에 포함 */}
            <Card2
              id={card.offer.id}
              image={card.offer.imageUrl}
              tag={
                card.offer.offerStatus === "ATTEND"
                  ? "대기"
                  : card.offer.offerStatus === "APPROVED"
                  ? "승인"
                  : "대기"
              }
            />
          </div>
        ))}
        {isModalVisible && (
          <Modal
            onConfirm={handleConfirmReward}
            onCancel={handleRejectReward}
            msg={"리워드를 결정합니다."}
            text1={"거절"}
            text2={"승인"}
          />
        )}
      </div>
      <DataNavbar />
    </>
  );
}

export default CardListCollector2;
