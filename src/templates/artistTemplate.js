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
  /* display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  //height: 100vh;
  //padding: 20px; /* Adjust padding for smaller screens */

  //@media (min-width: 768px) {
  // align-items: center; /* Center items for larger screens */
  //} */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  height: 100vh;
  padding: 20px; /* Adjust padding for smaller screens */

  @media (min-width: 768px) {
    align-items: center; /* Center items for larger screens */
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

const Button = styled.button`
  margin-top: 20px;
  font-family: "Roboto Mono", monospace;
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  margin-top: 50px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  outline: none;
  border: solid white;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    background-color: white;
    border: solid white;
    color: black;
  }
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-top: 10px;
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

  @media (max-width: 768px) {
    margin-left: 1.5rem;
    margin-top: 20rem;
  }
`;

const Text = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 2rem;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Desc = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Info = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px; /* Set a maximum width */
  width: 100%;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  /* background-color: white; */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 2px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 0.75rem;
    max-width: 100%;
  }
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

              <Button>booking request</Button>
            </Right>
            <Left></Left>
          </Container>
        </Slide>
      </Wrapper>
    </Layout>
  );
};

export default ArtistTemplate;

// <Container>
//   <Right>
//     <Text>{title}</Text>
//     <Desc>{description}</Desc>

//     <Info>{info}</Info>

//     {/* <Desc>{description}</Desc> */}
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <Button>booking request</Button>
//     {/* <Title>BOOK</Title> */}
//   </Right>
//   <Left></Left>
// </Container>;
