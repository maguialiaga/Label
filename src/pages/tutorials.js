import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Tutorials from "../components/Tutorials";

function tutorials() {
  return (
    <Layout>
      <NavBar navColor={"black"} />

      <Tutorials />

      <Footer></Footer>
    </Layout>
  );
}

export default tutorials;
