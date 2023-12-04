import React from "react";
import styled, { keyframes } from "styled-components";
// import { Link } from "gatsby";
import logo1 from "../assets/images/logo1.jpg";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.jpg";
import logo4 from "../assets/images/logo4.jpg";
import logo5 from "../assets/images/logo5.jpg";

const SlideContainer = styled.div`
  background: #f2f2f2;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 5rem;
  overflow: hidden;
  position: absolute;
  /* z-index behind the cards */
`;

// Keyframes
const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const LogosContainer = styled.div`
  overflow: hidden;
  padding: 60px 0;
  background: white;
  white-space: nowrap;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  /* &:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  } */

  &:hover .logos-slide {
    animation-play-state: paused;
  }
`;

const LogosSlide = styled.div`
  display: inline-block;
  animation: ${slide} 35s infinite linear;
`;

const LogoImage = styled.img`
  height: 150px;
  margin: 0 30px;
`;

const NameSlider = () => {
  return (
    <SlideContainer>
      <LogosContainer className="logos">
        <LogosSlide className="logos-slide">
          <LogoImage src={logo1}></LogoImage>
          <LogoImage src={logo2}></LogoImage>
          <LogoImage src={logo3}></LogoImage>
          <LogoImage src={logo4}></LogoImage>
          <LogoImage src={logo5}></LogoImage>
        </LogosSlide>
        <LogosSlide className="logos-slide">
          <LogoImage src={logo1}></LogoImage>
          <LogoImage src={logo2}></LogoImage>
          <LogoImage src={logo3}></LogoImage>
          <LogoImage src={logo4}></LogoImage>
          <LogoImage src={logo5}></LogoImage>
        </LogosSlide>
      </LogosContainer>
    </SlideContainer>
  );
};

export default NameSlider;
