import React, { useState } from "react";
// 상단 데이터 제공 컴포넌트, 하단 버튼, 하단바 컴포넌트를 import 합니다.
import { useNavigate, useParams } from "react-router-dom";
import BackDataTradeList from "../../components/BackDataTradeList/BackDataTradeList";
import DataNavbar2 from "../../components/DataNavbar2/DataNavbar2";
import "./DataSubmission.css";
import camera from "../../images/camera.svg";

function DataSubmission() {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // 이미지 파일 처리 함수
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // 폼 제출 함수
  const handleSubmit = async (e) => {
    try {
      const location = "Gachon";
      const endpoint = `/offers/${id}`;

      const formData = new FormData();
      formData.append("image", image);

      const json = JSON.stringify({ content: content, location: location });
      const post = new Blob([json], { type: "application/json" });

      formData.append("post", post);

      const response = fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("token"),
        },
        body: formData,
      });

      console.log(response);
      navigate("/cardlist");
    } catch (error) {
      alert(error);
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  return (
    <div className="data-submission-container">
      <BackDataTradeList listTitle="데이터 제공" />
      <form onSubmit={handleSubmit} className="submission-form">
        <div
          className="image-upload-section"
          onClick={() => document.getElementById("image-input").click()}
        >
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Uploaded" />
          ) : (
            <div className="upload-placeholder">
              <img
                src={camera}
                alt="camera Logo"
                style={{ width: 24, height: 24 }}
              />
              <span>여기를 클릭해서 사진을 추가하세요!</span>
            </div>
          )}
          <input
            id="image-input"
            type="file"
            onChange={handleImageChange}
            hidden
          />
        </div>
        <textarea
          className="description-input"
          placeholder="내용 (Optional)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="Next-button">
          <button
            type="submit"
            style={{ backgroundColor: image ? "#214FC7" : "#A5A5A5" }}
          >
            참여하기
          </button>
        </div>
      </form>
      <DataNavbar2 />
    </div>
  );
}

export default DataSubmission;
