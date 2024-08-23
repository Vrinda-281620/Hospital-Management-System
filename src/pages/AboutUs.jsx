import React from "react";
import Intro from "../components/Intro";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Intro
        title={"Learn More About Us | THE OPD"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;