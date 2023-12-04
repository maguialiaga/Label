// gatsby-node.js

const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const artistsData = [
    {
      title: "GESPONA",
      link: "gespona",
      description: "Description for Gespona",
      image: `gonCover.jpg`,
    },
    {
      title: "DJOLEE",
      link: "djolee",
      description: "Description for Djolee",
      image: `nicoCover.jpg`,
    },
    {
      title: "AMADORI",
      link: "amadori",
      description: "Description for Amadori",
      image: `jeroCover.jpg`,
    },
    {
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      description: "Description for Agustin Giri",
      image: `gonCover.jpg`,
    },
    {
      title: "ABUK",
      link: "abuk",
      description: "Description for Abuk",
      image: `abukCover.jpg`,
    },
    {
      title: "APO LUCIA",
      link: "apolucia",
      description: "Description for Apo",
      image: `gonCover.jpg`,
    },
  ];

  artistsData.forEach((artist) => {
    createPage({
      path: `/roaster/${artist.link}`,
      component: require.resolve("./src/templates/artistTemplate.js"),
      context: {
        artist: {
          title: artist.title,
          description: artist.description,
          image: artist.image,
        },
      },
    });
  });
};
