import * as React from "react";
import PreLoader from "../components/PreLoader";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import Video from "../components/Video";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Layout>
          <Seo title="Rummel" />
          <NavBar navColor={"white"} />
          {/* <ImageSlider></ImageSlider> */}
          <Video></Video>
        </Layout>
      )}
    </>
  );
}
