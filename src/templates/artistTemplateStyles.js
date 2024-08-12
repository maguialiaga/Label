import styled from "styled-components";

// import { FaInstagram, FaSpotify, FaSoundcloud } from "react-icons/fa";

//  spotify: {
//         name: "Spotify",
//         icon: iconStyle(FaSpotify),
//         src: "https://open.spotify.com/artist/1HfGJTanZiMBHskJLQkRxL?si=PJYsWl9URV-hOgPKUCHagw",
//       },
//       instagram: {
//         name: "Instagram",
//         icon: iconStyle(FaInstagram),
//         src: "https://www.instagram.com/djolee.music/",
//       },
//       soundcloud: {
//         name: "SoundCloud",
//         icon: iconStyle(FaSoundcloud),
//         src: "https://soundcloud.com/djolee_music",
//       },
//     },

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
  padding: 20px; /* Adjust padding for smaller screens */

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
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
  border-radius: 4px;
  background: none;
  white-space: nowrap;
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

export const Right = styled.div`
  margin-top: 10rem;
  margin-left: 7rem;
  width: auto;
  max-height: calc(100vh - 40px); /* Adjust 40px for padding or margins */
  position: relative;

  @media (max-width: 768px) {
    margin-left: 1.5rem;
    margin-top: 20rem;
    max-height: calc(100vh - 200px); /* Adjust as necessary */
  }
`;

export const Text = styled.h1`
  font-family: "Montserrat", sans-serif;
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  max-width: 800px;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
`;
