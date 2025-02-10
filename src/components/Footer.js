import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 100%;
  margin: 0 auto; /* Centra el contenido horizontalmente */
  padding: 0 50px;
  background-color: black;
  height: 100px; /* Altura fija del footer */
  display: flex;
  align-items: center;
  justify-content: center; /* Centra el contenido del footer */
  font-family: "Montserrat", sans-serif;
  color: white;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

const Footer = () => {
  return <Container>© Aca van los iconos de ig y soundcloud</Container>;
};

export default Footer;
