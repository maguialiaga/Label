// src/Music.js
import React from "react";
import styled from "styled-components";

// Import images from the assets folder
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

// Styled components

// const Container = styled.div`
//   margin-top: 150px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   z-index: 1;
// `;

// const Card = styled.div`
//   flex: 1 1 calc(33.33% - 30px); // Three columns on large screens
//   max-width: 250px;
//   /* width: 50px; */
//   margin: 15px;
//   overflow: hidden;
//   /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
//   transition: transform 0.3s ease-in-out;
//   @media (max-width: 768px) {
//     width: 250px;
//   }
//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (max-width: 1024px) {
//     flex: 1 1 calc(50% - 30px); // Two columns on medium screens (tablets)
//   }

//   @media (max-width: 768px) {
//     flex: 1 1 calc(100% - 30px); // One column on small/mobile screens
//   }
// `;
const Container = styled.div`
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; // Distribute items evenly in each row
  align-items: flex-start;
  position: relative;
  z-index: 1;
  padding: 0 120px;
`;

const Card = styled.div`
  flex: 1 1 calc(33.33% - 40px); // Ensures 3 cards per row with space between
  max-width: calc(33.33% - 40px);
  margin: 15px 20px; // Space between each card
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 30px); // Two cards per row on medium screens
    max-width: calc(50% - 30px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(100% - 20px); // One card per row on small/mobile screens
    max-width: calc(100% - 20px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardDescription = styled.div`
  padding: 20px;
  text-align: left;
  font-family: "Montserrat", sans-serif;

  h2 {
    margin: 0;
    font-size: 1.2em;
    color: black;
  }

  p {
    color: #bbb;
    font-size: 0.9em;
  }
`;

const Music = () => {
  // Data for cards with imported images
  const albums = [
    {
      id: 13,
      title: "Lux Interior",
      description: "Fabricio Mosoni",
      image: rummel13,
      link: "",
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

  return (
    <Container>
      {albums.map((album) => (
        <Card key={album.id}>
          <a href={album.link} target="_blank" rel="noopener noreferrer">
            <CardImage src={album.image} alt={album.title} />
          </a>
          {/* Text description is now outside of the clickable area */}
          <CardDescription>
            <h2>{album.title}</h2>
            <p>{album.description}</p>
          </CardDescription>
        </Card>
      ))}
    </Container>
  );
};

export default Music;
