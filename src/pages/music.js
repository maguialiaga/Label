import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import ImageSlider from "../components/ImageSlider";

function music() {
  return (
    <Layout>
      <NavBar navColor={"white"} />
      <ImageSlider></ImageSlider>
    </Layout>
  );
}

export default music;
