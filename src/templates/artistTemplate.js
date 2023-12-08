import React from "react";

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

const Slide = styled.div`
  height: 100%;
  width: 100vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100vh;
    /* height: auto; */
    padding: 20px;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

// const Desc = styled.p`
//   width: 60%;
//   background-color: white;
//   font-size: 20px;
//   margin-top: 20px;
//   @media only screen and (max-width: 480px) {
//     width: 100%;
//   }
// `;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  font-family: "Roboto Mono", monospace;
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  outline: none;
  border: solid white;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    transition: 0.3s ease;
    background-color: white;
    border: solid white;
    color: black;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

// const Phone = styled.span`
//   color: #f0667d;
//   font-weight: bold;
// `;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  margin-left: 7rem;
  width: auto;
  height: 3vh;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: flex;
  }
`;

const Text = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 2rem;
`;
const Desc = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 15px;
`;

const ArtistTemplate = ({ pageContext }) => {
  const { title, image, description, info } = pageContext.artist;
  const backgroundImage = require(`../assets/images/${image}`);

  return (
    <Layout>
      <NavBar navColor={"white"} />
      <Wrapper>
        <Gradient></Gradient>

        <Slide
          style={{
            backgroundImage: `url(${backgroundImage.default})`,
          }}
        >
          <Container>
            <Right>
              <Text>{title}</Text>
              <Desc>{description}</Desc>

              <Info>{info}</Info>

              {/* <Desc>{description}</Desc> */}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Button>booking request</Button>
              {/* <Title>BOOK</Title> */}
            </Right>
            <Left></Left>
          </Container>
        </Slide>
      </Wrapper>
    </Layout>
  );
};

export default ArtistTemplate;
