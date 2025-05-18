import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AppWrapper from "../components/GlobalStyles";
import MainContent from "../components/GlobalStyles";

import Shop from "../components/Shop";

function shop() {
  return (
    <Layout>
      <NavBar navColor={"black"} />

      <Shop />

      <Footer></Footer>
    </Layout>
  );
}

export default shop;
