// gatsby-node.js

const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const artistsData = [
    {
      title: "GESPONA",
      link: "gespona",
      description: "DJ / PRODUCER",
      info: "Agustin Giri is an Argentinan DJ & Music Producer who was born in Mar del Plata. From an early age, his keen interest in electronic music led him to explore musical production, opening a path of recognition in the local and international scene.",
      image: `gonCover.jpg`,
    },
    {
      title: "DJOLEE",
      link: "djolee",
      description: "DJ / PRODUCER",
      info: "Agustin Giri is an Argentinan DJ & Music Producer who was born in Mar del Plata. From an early age, his keen interest in electronic music led him to explore musical production, opening a path of recognition in the local and international scene.",
      image: `nicoCover.jpg`,
    },
    {
      title: "AMADORI",
      link: "amadori",
      description: "DJ / PRODUCER",
      info: "Agustin Giri is an Argentinan DJ & Music Producer who was born in Mar del Plata. From an early age, his keen interest in electronic music led him to explore musical production, opening a path of recognition in the local and international scene.",
      image: `jeroCover.jpg`,
    },
    {
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      description: "DJ / PRODUCER",
      info: "Agustin Giri is an Argentinan DJ & Music Producer who was born in Mar del Plata. From an early age, his keen interest in electronic music led him to explore musical production, opening a path of recognition in the local and international scene.",
      image: `agusCover.jpg`,
    },
    {
      title: "ABUK",
      link: "abuk",
      description: "DJ / PRODUCER",
      info: "Agustin Giri is an Argentinan DJ & Music Producer who was born in Mar del Plata. From an early age, his keen interest in electronic music led him to explore musical production, opening a path of recognition in the local and international scene.",
      image: `abukCover.jpeg`,
    },
    {
      title: "APO LUCIA",
      link: "apolucia",
      description: "SINGER",
      info: "MORE INFO",
      image: `apoCover.jpeg`,
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
