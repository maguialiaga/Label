// ArtistTemplate.js

import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import NavBar from "../components/NavBar";
import { FaSpotify, FaInstagram, FaSoundcloud } from "react-icons/fa";
import {
  Wrapper,
  Slide,
  Gradient,
  Container,
  Left,
  Button,
  Right,
  Text,
  Desc,
  Info,
  BioName,
  SocialIcon,
  SocialIconsWrapper,
} from "./artistTemplateStyles";
// import BookForm from "../components/BookForm";

const ArtistTemplate = ({ pageContext }) => {
  const {
    title,
    link,
    image,
    description,
    info,
    support,
    released,
    spotify,
    instagram,
    soundcloud,
  } = pageContext.artist;
  const backgroundImage = require(`../assets/images/${image}`);

  // Social Media Links Array
  const socialLinks = [
    { name: "Spotify", icon: <FaSpotify />, url: spotify },
    { name: "Instagram", icon: <FaInstagram />, url: instagram },
    { name: "SoundCloud", icon: <FaSoundcloud />, url: soundcloud },
  ];

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
              <Info>
                {info}
                <br />
                <br />
                <BioName>Released on</BioName>
                {released}
                <br />
                <br />
                <BioName>Supported by</BioName>
                {support}
              </Info>
              <Link to={"/requests"}>
                <Button>Booking request</Button>
              </Link>
              <SocialIconsWrapper>
                {socialLinks.map(
                  (link) =>
                    link.url && (
                      <SocialIcon
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </SocialIcon>
                    )
                )}
              </SocialIconsWrapper>
            </Right>
            <Left></Left>
          </Container>
        </Slide>
      </Wrapper>
    </Layout>
  );
};

export default ArtistTemplate;
