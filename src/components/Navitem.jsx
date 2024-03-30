import React from 'react';

const Navitem = ({ title, desc, imgUrl, newsUrl }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top"  style={{ height: "200px", objectFit: "cover" }}  alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{desc}....</p>
          <a href={newsUrl} className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  ); 
};

export default Navitem;

