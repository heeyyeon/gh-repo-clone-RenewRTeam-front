// import React from 'react';
// import './Card.css';

// function Card({ image, title, description, limit }) {
//   return (
//       <div className="card">
//         <img src={image} alt="content" className="card-image" />
//         <div className="card-details">
//           <h2 className="card-title">{title}</h2>
//           <p className="card-description">{description}</p>
//           <p className="card-limit">{limit}</p>
//         </div>
//       </div>
//   );
// }

// export default Card;

import React from 'react';
import './Card.css';

function Card({ image, title, description, tag }) {

  let tagClassName = '';

  if (tag === '참여중') {
    tagClassName = 'chamyeojung';
  } else if (tag === '거절') {
    tagClassName = 'geojul';
  } else if (tag === '승인') {
    tagClassName = 'seungin';
  } else if (tag === '대기') {
    tagClassName = 'daegi';
  }

  return (
    <div className="card">
      <img src={image} alt="content" className="card-image" />
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {tag && <span className={`card-tag ${tagClassName}`}>{tag}</span>}
      </div>
    </div>
  );
}

export default Card;