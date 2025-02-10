// ArtistTemplate.js

import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import NavBar from "../components/NavBar";
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
  Modal,
} from "./artistTemplateStyles";
import BookForm from "../components/BookForm";

const ArtistTemplate = ({ pageContext }) => {
  const { title, image, description, info, support, released } =
    pageContext.artist;
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

              <Info>
                {info}
                <br></br>
                <br></br>
                <BioName>Released on</BioName>
                {released}
                <br></br>
                <br></br>
                <BioName>Supported by</BioName>
                {support}
              </Info>
              <Link to={`/requests?artist=${title}`}>
                <Button>Booking request</Button>
              </Link>
            </Right>
            <Left></Left>
          </Container>
        </Slide>
      </Wrapper>
    </Layout>
  );
};

export default ArtistTemplate;
