import React from "react";
import "./Card2.css";

function Card2({ image, tag }) {
  let tagClassName = "";

  if (tag === "참여중") {
    tagClassName = "chamyeojung";
  } else if (tag === "거절") {
    tagClassName = "geojul";
  } else if (tag === "승인") {
    tagClassName = "seungin";
  } else if (tag === "대기") {
    tagClassName = "daegi";
  }

  return (
    <div className="card">
      <img src={image} alt="content" className="card-image" />
      {tag && <span className={`card-tag ${tagClassName}`}>{tag}</span>}
    </div>
  );
}

export default Card2;