import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Music from "../components/Music";

function music() {
  return (
    <Layout>
      <NavBar navColor={"black"} />
      <Music />
      {/* <ImageSlider></ImageSlider> */}
      <Footer></Footer>
    </Layout>
  );
}

export default music;
