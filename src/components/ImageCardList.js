import React from "react";
import styled from "styled-components";
import gon from "../assets/images/gon.jpg";
import nico from "../assets/images/nico.jpg";
import jero from "../assets/images/jero.jpg";
import agus from "../assets/images/agus.jpg";
import apo from "../assets/images/apo.jpg";
import abuk from "../assets/images/abuk.jpg";

import { Link } from "gatsby";

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CardContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Card = styled.div`
  width: 400px;
  margin: 15px;
  overflow: hidden;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.2);
  }
  @media (max-width: 768px) {
    ${Card}:hover & {
      transform: none;
    }
  }
`;

const CardContent = styled.div`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CardTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const ImageCard = ({ imageUrl, title, description, link }) => {
  return (
    <>
      <CardLink to={`/roaster/${link}`}>
        <Card>
          <CardImage src={imageUrl} alt={title} />
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      </CardLink>
    </>
  );
};

const ImageCardList = () => {
  // Example data
  const cardsData = [
    {
      imageUrl: `${gon}`,
      title: "GESPONA",
      link: "gespona",
    },
    {
      imageUrl: `${nico}`,
      title: "DJOLEE",
      link: "djolee",
    },
    {
      imageUrl: `${jero}`,
      title: "AMADORI",
      link: "amadori",
    },
    {
      imageUrl: `${agus}`,
      title: "AGUSTIN GIRI",
      link: "agustingiri",
    },
    {
      imageUrl: `${abuk}`,
      title: "ABUK",
      link: "abuk",
    },
    {
      imageUrl: `${apo}`,
      title: "APO LUCIA",
      link: "apolucia",
    },
  ];

  return (
    <>
      <CardContainer>
        {cardsData.map((card, index) => (
          <ImageCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            link={card.link}
            description={card.description}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default ImageCardList;
