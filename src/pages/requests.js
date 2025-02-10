import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import BookForm from "../components/BookForm";
import Footer from "../components/Footer";

function requests() {
  return (
    <Layout>
      <NavBar navColor={"black"} />
      <BookForm />
      <Footer></Footer>
    </Layout>
  );
}

export default requests;
