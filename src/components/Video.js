import React, { useState, useEffect } from "react";
import styled from "styled-components";

import video from "../assets/web2.mp4";
import videoMobile from "../assets/vertical2.mp4";

const HeroSection = styled.section`
  height: 90vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); */
  /* position: relative; */
  /* 
  @media (max-width: 991px) {
    height: 100vh;
    padding-top: 0;
  } */
`;

const HeroVideo1 = styled.video`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  /* @media (max-width: 991px) {
    width: 100vh;
    height: 100vw;
    transform: rotate(90deg);
    transform-origin: center center;
  } */
`;

export default function Video() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth <= 991 ? videoMobile : video
  );

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth <= 991 ? videoMobile : video);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeroSection>
      <HeroVideo1
        src={videoSrc}
        autoPlay
        loop
        muted
        type="video/mp4"
        playsInline
      />
    </HeroSection>
  );
}

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// import video from "../assets/web.mp4";
// import videoMobile from "../assets/movil.mp4";

// const HeroSection = styled.section`
//   height: 90vh;
//   background-position: center;
//   background-size: cover;
//   padding-top: clamp(70px, 25vh, 220px);
//   box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
// `;

// const HeroVideo1 = styled.video`
//   display: block;
//   object-fit: cover;
//   overflow: hidden;
//   width: 100%;
//   height: 100%;
//   /* background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)); */
//   background: black;
//   top: 0;
//   position: absolute;
//   z-index: -1;
// `;

// export default function Video() {
//   return (
//     <>
//       <HeroSection>
//         <HeroVideo1
//           src={video}
//           autoPlay
//           loop
//           muted
//           type={"video/mp4"}
//           playsInline
//           // formats={["AUTO", "WEBP", "AVIF"]}
//         />
//         {/* <script>document.getElementById('vid').play();</script> */}
//       </HeroSection>
//     </>
//   );
// }
