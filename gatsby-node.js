// gatsby-node.js

const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const artistsData = [
    {
      title: "GESPONA",
      link: "gespona",
      description: "DJ / PRODUCER",
      info: "Lorem ipsum dolor sit amet. Ut rerum quos sed nihil  ",
      image: `gonCover.jpg`,
    },
    {
      title: "DJOLEE",
      link: "djolee",
      description: "DJ / PRODUCER",
      info: "MORE INFO",
      image: `nicoCover.jpg`,
    },
    {
      title: "AMADORI",
      link: "amadori",
      description: "DJ / PRODUCER",
      info: "MORE INFO",
      image: `jeroCover.jpg`,
    },
    {
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      description: "DJ / PRODUCER",
      info: "MORE INFO",
      image: `gonCover.jpg`,
    },
    {
      title: "ABUK",
      link: "abuk",
      description: "DJ / PRODUCER",
      info: "MORE INFO",
      image: `abukCover.jpg`,
    },
    {
      title: "APO LUCIA",
      link: "apolucia",
      description: "SINGER / ARTIST",
      info: "MORE INFO",
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
          info: artist.info,
          image: artist.image,
        },
      },
    });
  });
};
