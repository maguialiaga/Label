import React, { useState } from "react";
import Layout from "../components/Layout";
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
  const { title, image, description, info, support } = pageContext.artist;
  const backgroundImage = require(`../assets/images/${image}`);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
                <BioName>Released on</BioName>
                {info}
                <br></br>
                <BioName>Supported by</BioName>
                {support}
              </Info>

              <Button onClick={openModal}>booking request</Button>
              {showModal && (
                <Modal>
                  <BookForm showModal={showModal} setShowModal={setShowModal} />
                </Modal>
              )}
            </Right>
            <Left></Left>
          </Container>
        </Slide>
      </Wrapper>
    </Layout>
  );
};

export default ArtistTemplate;
