import React from "react";

const Intro = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p align="justify">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid pariatur in, iusto quasi neque sit dolorem, veniam 
            eius harum nostrum quod eligendi, nulla consequuntur officia commodi.
            np Quidem distinctio exercitationem accusamus.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Intro;