import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";

import rummel1 from "../assets/images/rummel_1.jpg";
import rummel2 from "../assets/images/rummel_2.jpg";
import rummel3 from "../assets/images/rummel_3.jpg";
import rummel4 from "../assets/images/rummel_4.jpg";
import rummel5 from "../assets/images/rummel_5.jpg";
import rummel6 from "../assets/images/rummel_6.jpg";
import rummel7 from "../assets/images/rummel_7.jpg";
import rummel8 from "../assets/images/rummel_8.jpg";
import rummel9 from "../assets/images/rummel_9.jpg";
import rummel10 from "../assets/images/rummel_10.jpg";
import rummel11 from "../assets/images/rummel_11.jpg";
import rummel12 from "../assets/images/rummel_12.jpg";
import rummel13 from "../assets/images/rummel_13.jpg";
import rummel14 from "../assets/images/rummel_14.jpg";
import rummel15 from "../assets/images/rummel_15.jpg";
import rummel16 from "../assets/images/rummel_16.jpg";
import rummel17 from "../assets/images/rummel_17.jpg";
import rummel18 from "../assets/images/rummel_18.jpg";

// Styled components
const Card = styled(motion.div)`
  flex: 1 1 calc(30% - 40px);
  max-width: calc(30% - 40px);
  margin: 10px 20px;
  overflow: hidden;
  position: relative; // Required for positioning the description
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);

    div {
      opacity: 1; // Make the description visible on hover
      visibility: visible;
    }
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 30px);
    max-width: calc(50% - 30px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(80% - 20px);
    max-width: calc(80% - 20px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardDescription = styled.div`
  position: absolute; // Position overlay over the image
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); // Semi-transparent black background
  color: white; // White text for contrast
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0; // Initially hidden
  visibility: hidden; // Prevents it from being clickable when hidden
  transition: opacity 0.3s ease, visibility 0.3s ease;
  font-family: "Montserrat", sans-serif;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 1.2em;
    color: white;
  }

  p {
    margin: 10px 0 0;
    font-size: 0.9em;
  }
`;

const Container = styled.div`
  margin-top: 150px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  padding: 0 150px;
  @media (max-width: 1024px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 0 10px;
  }
`;

const Music = () => {
  const albums = [
    {
      id: 18,
      title: "Breathe",
      description: "Schlepp Geist",
      image: rummel18,
      link: "https://open.spotify.com/intl-es/album/0EeCuLjIRmyU80jYbdYi0P?si=riBRjwlxQZW5sn9wPhv3eg",
    },
    {
      id: 17,
      title: "Around",
      description: "Abuk",
      image: rummel17,
      link: "https://open.spotify.com/intl-es/album/11FWa3fq7Bx8o60t4Co3D5?si=cNwBox3ZSI2QsNUdECHV8w",
    },
    {
      id: 16,
      title: "Machines",
      description: "Motip White",
      description2: "(Incl. Djolee & Gespona Remix)",
      image: rummel16,
      link: "https://open.spotify.com/intl-es/album/2824u5VwmTCh1dlvmNussr?si=bqfCnUhkS4O3b4qYKCdZRg",
    },
    {
      id: 15,
      title: "Emotional Swing",
      description: "Zakir",
      description2: "(Incl. Thimble Remix)",
      image: rummel15,
      link: "https://open.spotify.com/intl-es/album/6QTXfSuVLV8r9fFjdm5mHd?si=ovaLng1dQ_-Pb3nPhB8Z6w",
    },
    {
      id: 14,
      title: "Panorama 2",
      description:
        "Abuk, Agustin Giri, Djolee, Gespona, Golden Hour, Last Men On Earth.",
      image: rummel14,
      link: "https://open.spotify.com/intl-es/album/0EeCuLjIRmyU80jYbdYi0P?si=riBRjwlxQZW5sn9wPhv3eg",
    },
    {
      id: 13,
      title: "Lux Interior",
      description: "Fabricio Mosoni",
      image: rummel13,
      link: "https://open.spotify.com/intl-es/album/1paUeA6llZyWSzcwg0Om3D?si=sR1Sf_hhQBioFhun4iScmg",
    },
    {
      id: 12,
      title: "Cubico",
      description: "Agustin Giri",
      image: rummel12,
      link: "https://open.spotify.com/intl-es/album/3QQiElgOjXN0OS3eXzGBlZ?si=TUlHIw-mRY26zUA2s-7WkA",
    },
    {
      id: 11,
      title: "Ma Kumba Remixes",
      description: "Yotam Avni & Zakir",
      image: rummel11,
      link: "https://open.spotify.com/intl-es/album/7jbVm0LiiPewXwfXkFHdCC?si=5ZgRQlbZSs-RrOrHotn8MQ",
    },
    {
      id: 10,
      title: "Panorama 1 - Part 2",
      description: "Scippo & Marvio, Hylia, Amadori & Gespona, Liebig",
      image: rummel10,
      link: "https://open.spotify.com/intl-es/album/03YUsFsNsO0sWI6Lr1MVx1?si=ikQZ4T2JTQi0q-JAJj66LA",
    },
    {
      id: 9,
      title: "Panorama 1 - Part 1",
      description:
        "Motip White, Abuk, Kon Faber, Martin Cozar, Djolee & Gespona",
      image: rummel9,
      link: "https://open.spotify.com/intl-es/album/2p4UKIBUwhvNawtECphUKE?si=IgUiKoLFQVWBbeOuufaq_g",
    },
    {
      id: 8,
      title: "We Got The Funk",
      description: "Marvio, Gespona",
      image: rummel8,
      link: "https://open.spotify.com/intl-es/album/52GhmDQMBqDKDdZsmuaq7n?si=cx01lIGpRpWvPusKO_3hyQ",
    },
    {
      id: 7,
      title: "Ma Kumba",
      description: "Djolee",
      image: rummel7,
      link: "https://open.spotify.com/intl-es/album/3kiVoDsyhDCycLYBLSubUB?si=Vfg6LIxbROih40JCeOTufA",
    },
    {
      id: 6,
      title: "Tanzen Remixes",
      description: "Alican & Nhii",
      image: rummel6,
      link: "https://open.spotify.com/intl-es/album/2JdwVaXSm8oSKLO325JSNJ?si=5ZklcreySSW_SzJ2doT2VQ",
    },
    {
      id: 5,
      title: "Malabares Remixes",
      description: "Last Men on Earth & Cioz",
      image: rummel5,
      link: "https://open.spotify.com/intl-es/album/6MavJfh30oZArZTM8MQt3t?si=lYEbBDw3TKad-1LRHTN3FA",
    },
    {
      id: 4,
      title: "Step Out",
      description: "Gespona",
      image: rummel4,
      link: "https://open.spotify.com/intl-es/album/4Wifmi7zU0sbiJCfgz753h?si=TrCKbwXPS561riYZ6r8pLQ",
    },
    {
      id: 3,
      title: "Tanzen",
      description: "Abuk",
      image: rummel3,
      link: "https://open.spotify.com/intl-es/album/6hXoM1EKZVUpzvP779Afdu?si=htsyqZTOTsCy2t251ZWS1Q",
    },
    {
      id: 2,
      title: "Caminos de fuegos",
      description: "Agustin Giri, Djolee (ft. Apo Lucia)",
      image: rummel2,
      link: "https://open.spotify.com/intl-es/album/73h2kVBHxyM2U8G7zX4otu?si=hjZ1u5AAQdWpgogo4WGrTw",
    },
    {
      id: 1,
      title: "Malabares",
      description: "Djolee, Gespona",
      image: rummel1,
      link: "https://open.spotify.com/intl-es/album/7sRJXsvVhU9ucR9JlIBL72?si=mla0hY2EQdOED9ilVOWT7g",
    },
  ];

  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Container ref={ref}>
      {albums.map((album) => (
        <Card
          as="a" // Use the styled Card component as a link
          href={album.link}
          target="_blank"
          rel="noopener noreferrer"
          key={album.id}
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
        >
          <CardImage src={album.image} alt={album.title} />
          <CardDescription>
            <h2>{album.title}</h2>
            <p>{album.description}</p>
            <p>{album.description2}</p>
          </CardDescription>
        </Card>
      ))}
    </Container>
  );
};

export default Music;
