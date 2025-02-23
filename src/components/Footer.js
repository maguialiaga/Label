import React from "react";
import styled from "styled-components";
import { FaInstagram, FaSpotify, FaSoundcloud } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

const FooterContainer = styled.div`
  width: 100%;
  background-color: black;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 30px; /* Spacing between icons */
`;

const IconLink = styled.a`
  color: white;
  font-size: 22px;
  transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: white;
    transform: scale(1.2);
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    gap: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconWrapper>
        <IconLink
          href="https://open.spotify.com/playlist/12MxJzDzNiiIx8UuOq1MHz?si=852a37b932574b84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/rummel_music?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </IconLink>
        <IconLink
          href="https://on.soundcloud.com/L8WpDww4js8gzJRBA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud />
        </IconLink>
        <IconLink
          href="https://www.beatport.com/es/label/rummel/115146"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBeatport />
        </IconLink>
      </IconWrapper>
    </FooterContainer>
  );
};

export default Footer;
