import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import ImageCardList from "../components/ImageCardList";

const roaster = () => {
  return (
    <Layout>
      <NavBar navColor={"white"} />
      <ImageCardList />
    </Layout>
  );
};

export default roaster;
