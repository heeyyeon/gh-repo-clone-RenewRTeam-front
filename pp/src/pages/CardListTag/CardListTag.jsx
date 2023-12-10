import React, { useState } from 'react'; //api 받아오면 삭제하기
// import React, { useEffect, useState } from 'react'; //api 받아오면 주석 풀기
import { Link } from 'react-router-dom';
// import axios from 'axios';  //api 받아오면 주석 풀기
import Card from '../../components/Card/Card';
import './CardListTag.css';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import UserNavbar from '../../components/UserNavbar/UserNavbar';

function CardListTag({ listTitle }) {
    // 임시 데이터로 상태 초기화
    const [cards] = useState([
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: '카드 제목 1',
        description: '설명 1',
        limit: '제한 1',
        tag: '참여중'
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: '카드 제목 2',
        description: '설명 2',
        limit: '제한 2',
        tag: '거절'
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150',
        title: '카드 제목 3',
        description: '설명 3',
        limit: '제한 3',
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
      <BackDataTradeList listTitle="내가 쓴 글" />
      <div className="card-list">
        {cards.map((card, index) => (
          <Link key={index} to={`/detail/${card.id}`}>  {/* id 값을 URL에 포함 */}
            <Card 
              image={card.image} 
              title={card.title} 
              description={card.description} 
              limit={card.limit}
              tag={card.tag}
            />
          </Link>
        ))}
      </div>
      <UserNavbar />
    </>
  );
}

export default CardListTag;