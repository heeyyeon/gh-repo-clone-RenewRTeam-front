import React, { useState } from 'react'; //api 받아오면 삭제하기
// import React, { useEffect, useState } from 'react'; //api 받아오면 주석 풀기
import { Link } from 'react-router-dom';
// import axios from 'axios';  //api 받아오면 주석 풀기
import Card2 from '../../components/Card2/Card2';
import './CardListCollector2.css';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import DataNavbar from '../../components/DataNavbar/DataNavbar';

function CardListCollector2({ listTitle }) {
    // 임시 데이터로 상태 초기화
    const [cards] = useState([
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        tag: '대기'
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        tag: '승인'
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150',
        tag: '승인'
      },
      // 추가 카드 데이터...
    ]);

// function CardList({ listTitle }) {
//   const [cards, setCards] = useState([]);  // 카드 데이터를 상태로 관리

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const response = await axios.get('YOUR_API_ENDPOINT');  // API 엔드포인트로 변경하세요
//         setCards(response.data);  // API 응답으로 받은 데이터로 상태 업데이트
//       } catch (error) {
//         console.error('Error fetching cards:', error);
//         // 에러 처리 로직
//       }
//     };

//     fetchCards();
//   }, []);     //*api 받아오면 더미데이터 지우고 주석 풀기 

  return (
    <>
      <BackDataTradeList listTitle="데이터 수집 목록" />
      <div className="card-list">
        {cards.map((card, index) => (
          <Link key={index} to={`/detail/${card.id}`}>  {/* id 값을 URL에 포함 */}
            <Card2 
              image={card.image}
              tag={card.tag}
            />
          </Link>
        ))}
      </div>
      <DataNavbar />
    </>
  );
}

export default CardListCollector2;