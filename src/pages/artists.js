import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageCardList from "../components/ImageCardList";

const artists = () => {
  return (
    <Layout>
      <NavBar navColor={"black"} />
      <ImageCardList />
      <Footer></Footer>
    </Layout>
  );
};

export default artists;
