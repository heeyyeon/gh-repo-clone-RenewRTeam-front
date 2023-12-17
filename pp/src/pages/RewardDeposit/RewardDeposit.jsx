import React, { useState } from "react";
import "./RewardDeposit.css";
import PointNavbar from "../../components/PointNavbar/PointNavbar";
import BackDataTradeList from "../../components/BackDataTradeList/BackDataTradeList";
import { useNavigate } from "react-router-dom";

function RewardDeposit() {
  const navigate = useNavigate();

  const [model] = useState({
    databank: "0x4183...",
    mywallet: "0x92Ac...",
    currentbalance: "2500",
  });

  const [amount, setAmount] = useState("");
  const [isAmountInputVisible, setIsAmountInputVisible] = useState(false);

  function onNextClickHandler() {
    navigate("/DepositSuccess");
  }

  function onAmountInputChangeHandler(e) {
    setAmount(e.target.value);
    setIsAmountInputVisible(e.target.value !== ""); // 입력이 있을 때만 true로 설정
  }

  return (
    <>
      <BackDataTradeList listTitle={"입금"} />
      <div className="RewardDeposit" style={{ position: "relative" }}>
        {/* 상단바가 들어오면 margin 값을 변경해줘야 함 
                상단바와 '결제 정보' 간격은 32px */}
        <p
          style={{
            color: "black",
            margin: "32px 16px 16px 16px",
            fontSize: "16px",
          }}
        >
          결제 정보
        </p>
        <p
          style={{
            margin: "12px 16px 5px 16px",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
        >
          내 지갑 ({model ? model.mywallet : "Loading..."}) 에서
        </p>
        <p
          style={{
            margin: "12px 16px 5px 16px",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
        >
          데이터뱅크 ({model ? model.databank : "Loading..."})
        </p>
        <p
          style={{
            margin: "5px 16px 16px 16px",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
        >
          으로 보냅니다.
        </p>
        <input
          type="text"
          placeholder="얼마나 옮길까요?"
          value={amount}
          onChange={onAmountInputChangeHandler}
          style={{
            width: "164px",
            height: "20px",
            margin: "16px 16px 16px 16px",
            fontSize: "24px",
            color: "#A5A5A5",
            backgroundColor: "#ffffff",
            border: "none",
            textAlign: "center",
          }}
        />
        {amount && (
          <p
            style={{
              display: "inline",
              margin: "3px",
              fontSize: "24px",
              color: "#A5A5A5",
              marginLeft: "5px",
            }}
          >
            <b>DBC</b>
          </p>
        )}

        <p
          style={{
            width: "151px",
            height: "20px",
            margin: "5px 16px 5px 16px",
            padding: "4px 8px 6px 8px",
            fontSize: "14px",
            color: "#ffffff",
            backgroundColor: "#A5A5A5",
            borderRadius: "4px",
          }}
        >
          현재 잔액 : {model ? model.currentbalance : "Loading..."}
        </p>
        <div
          className={`nextbutton ${isAmountInputVisible ? "blue" : ""}`}
          onClick={onNextClickHandler}
        >
          다음
        </div>
      </div>
      <PointNavbar />
    </>
  );
}

export default RewardDeposit;
