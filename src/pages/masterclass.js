import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Masterclass from "../components/Masterclass";

const masterclass = () => {
  return (
    <Layout>
      <NavBar navColor={"black"} />
      <Masterclass></Masterclass>
      <Footer></Footer>
    </Layout>
  );
};

export default masterclass;
