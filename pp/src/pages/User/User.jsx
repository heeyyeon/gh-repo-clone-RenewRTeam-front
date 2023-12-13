//데이터 제공자의 사용자 페이지
import React, { useState } from "react";
import "./User.css";
import UserNavbar2 from "../../components/UserNavbar2/UserNavbar2";
import DataTradeList from "../../components/DataTradeList/DataTradeList";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

function User() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const [model] = useState({
    name: "본인이름",
  });

  const myContentButton = () => {
    navigate("/CardListCollector");
  };

  const logOutButton = () => {
    setIsModalVisible(true); //모달 활성화
  };

  const handleConfirm = () => {
    setIsModalVisible(false);
    navigate("/");
  };

  const handleCancle = () => {
    setIsModalVisible(false);
  };

  const handleAccountDeletion = () => {
    navigate("/OfferAccountDeletion2");
  };

  return (
    <>
      <div className="user">
      <DataTradeList listTitle={"사용자"} />
      {isModalVisible && (
          <Modal
            onConfirm={handleConfirm}
            onCancel={handleCancle}
            msg={"로그아웃하시겠습니까?"}
          />
        )}
        <p
          style={{
            color: "black",
            margin: "32px 0px 0px 16px",
            fontSize: "24px",
            fontFamily: "SOYOMapleRegular",
          }}
        >
          <b>{model ? model.name : "Loading..."}님, 안녕하세요.</b>
        </p>

        <div className="user-menu">
          <p onClick={myContentButton}>📸 내가 쓴 글</p>
          <p onClick={logOutButton}>📱 로그아웃</p>
          <p onClick={handleAccountDeletion}>❌ 회원탈퇴</p>
        </div>
      </div>

      <UserNavbar2 />
    </>
  );
}

export default User;
