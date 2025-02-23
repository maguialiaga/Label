import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  height: 100vh;
  padding: 10px; /* Adjust padding for smaller screens */

  @media (min-width: 768px) {
    align-items: center; /* Center items for larger screens */
  }
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 30%;
    height: 100%;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
  border-radius: 4px;
  background-color: white;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  outline: none;
  border: solid white;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    background: none;
    border: solid white;
    color: white;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const Right = styled.div`
  margin-top: 10rem;
  margin-left: 7rem;
  width: auto;
  max-height: calc(100vh - 40px); /* Adjust 40px for padding or margins */
  position: relative;

  @media (max-width: 768px) {
    margin-left: 1.5rem;
    margin-top: 10rem;
    max-height: calc(100vh - 200px); /* Adjust as necessary */
  }
  @media (max-width: 600px) {
    margin-left: 1.5rem;
    margin-top: 25rem;
    max-height: calc(100vh - 400px);
  }
  @media (max-width: 400px) {
    margin-left: 1.5rem;
    margin-top: 10rem;
    max-height: calc(100vh - 400px);
  }
`;

export const Text = styled.h1`
  font-family: "syne", sans-serif;
  color: white;
  font-size: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Desc = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const BioName = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 2px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

export const Info = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 0px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 0.75rem;
    max-width: 100%;
  }
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: left;
  justify-content: left;
  margin-top: 15px;

  @media (max-width: 600px) {
    justify-content: left;
    flex-wrap: wrap;
  }
`;

export const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
