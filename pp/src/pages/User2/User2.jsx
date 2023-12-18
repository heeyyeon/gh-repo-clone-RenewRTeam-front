//데이터 수집자의 사용자 페이지
import React, { useState, useEffect } from "react";
import "./User2.css";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import DataTradeList from "../../components/DataTradeList/DataTradeList";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

function User2() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const [model, setModel] = useState("");

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
    navigate("/AccountDeletion");
  };

  useEffect(() => {
    const endpoint = `/member/name`;

    const getUserName = async () => {
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

    getUserName();
  }, []); //*api 받아오면 더미데이터 지우고 주석 풀기

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
          <b>{model ? model : "Loading..."}님, 안녕하세요.</b>
        </p>

        <div className="user-menu">
          <p onClick={myContentButton}>📸 내가 쓴 글</p>
          <p onClick={logOutButton}>📱 로그아웃</p>
          <p onClick={handleAccountDeletion}>❌ 회원탈퇴</p>
        </div>
      </div>

      <UserNavbar />
    </>
  );
}

export default User2;
