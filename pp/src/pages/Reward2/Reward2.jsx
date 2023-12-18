import React, { useState, useEffect } from "react";
import Trading from "../../components/Trading/Trading";
import { useNavigate } from "react-router-dom";
import "./Reward2.css";
import DataTradeList from "../../components/DataTradeList/DataTradeList";
import transaction_icon from "../../images/transaction_icon.svg";
import PointNavbar from '../../components/PointNavbar/PointNavbar';

function Reward2() {
  const navigate = useNavigate();
  // const [model] = useState({
  //     myReward: '본인이 가진 리워드',
  //     image: 'https://via.placeholder.com/150',
  //     name: '거래한 사람이름',
  //     date: '거리한 날짜',
  //     trading: '입출금 내역',
  //     balance: '잔액'
  // });

  const handleTransferClick = () => {
    navigate("/RewardDeposit"); // RewardSend 컴포넌트로 이동
  };
  const [models, setModels] = useState([]);
  const endpoint = "/reward/history";

  useEffect(() => {
    const fetchRewardHistory = async () => {
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
          setModels(data.data);

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

    fetchRewardHistory();
  }, []);

  return (
    <>
      <DataTradeList listTitle={"잔액"} />
      <div className="reward">
        <p
          style={{
            color: "black",
            margin: "30px 0px 0px 16px",
            fontSize: "16px",
          }}
        >
          당신의 잔액은
        </p>
        <p style={{ margin: "6px 16px", fontSize: "32px" }}>
          <b>{models ? models.total : "Loading..."} </b>
        </p>
        <p style={{ margin: "6px 16px", fontSize: "16px" }}>입니다.</p>
        {/** 버튼 컴포넌트 들어올 자리, 지금은 만든게 없어서 대체 */}
        <div className="reward-button" onClick={handleTransferClick}>
          <b>입금하기</b>
        </div>
        <p style={{ color: "#A5A5A5", marginLeft: "16px" }}>거래내역</p>
        {models.responses &&
          models.responses.map((model, index) => (
            <Trading
              image={transaction_icon}
              name={model ? model.sender : "Loading..."}
              date={model ? model.createdAt : "Loading..."}
              trading={model ? model.amount : "Loading..."}
              balance={model ? model.total : "Loading..."}
            />
          ))}
      </div>
      <PointNavbar />
    </>
  );
}

export default Reward2;