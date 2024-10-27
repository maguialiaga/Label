import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import ImageSlider from "../components/ImageSlider";
import Music from "../components/Music";

function music() {
  return (
    <Layout>
      <NavBar navColor={"black"} />
      <Music />
      {/* <ImageSlider></ImageSlider> */}
    </Layout>
  );
}

export default music;
