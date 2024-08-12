import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import ImageCardList from "../components/ImageCardList";

const artists = () => {
  return (
    <Layout>
      <NavBar navColor={"black"} />
      <ImageCardList />
    </Layout>
  );
};

export default artists;
