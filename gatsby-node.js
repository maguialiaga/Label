// gatsby-node.js

const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const artistsData = [
    {
      title: "ABUK",
      link: "abuk",
      description: "DJ / PRODUCER",
      info: "An outstanding Argentinian based in Barcelona artist who masterfully fuses the roots of melodic house & techno, ",
      image: `abukCover.jpeg`,
    },
    {
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      description: "DJ / PRODUCER",
      info: "Agustin Giri is an Argentinan DJ & Music Producer who was born in Mar del Plata. From an early age, his keen interest in ",
      image: `agusCover.jpg`,
    },
    {
      title: "AMADORI",
      link: "amadori",
      description: "DJ / PRODUCER",
      info: "The argentinian producer Amadori currently lives in Barcelona since 2018, but he began his career as a DJ ",
      image: `jeroCover.jpg`,
    },
    {
      title: "APO LUCIA",
      link: "apolucia",
      description: "VOCALIST",
      info: "Lucia is an Argentinan singer based in Barcelona, she collaborated in Caminos the Fuego... Released on...",
      labels: "",
      image: `apoCover.jpeg`,
    },
    {
      title: "DJOLEE",
      link: "djolee",
      description: "DJ / PRODUCER",
      info: `Nicolas Marino a.k.a "Djolee" is a modern House / Techno DJ & Producer from Argentina based in Barcelona, Spain.`,
      image: `nicoCover.jpg`,
      spotify:
        "https://open.spotify.com/artist/1HfGJTanZiMBHskJLQkRxL?si=PJYsWl9URV-hOgPKUCHagw",
      instagram: "https://www.instagram.com/djolee.music/",
      soundcloud: "https://soundcloud.com/djolee_music",
    },
    {
      title: "GESPONA",
      link: "gespona",
      description: "DJ / PRODUCER",
      info: "Stil Vor Talent, Rummel, Radikon, Multinotes",
      support:
        "Dixon, Mind Against, Echonomist, Hernan Cattaneo, Oliver Koletzki, Mano le tough, Massano, Trikk",
      image: `gonCover.jpg`,
      spotify:
        "https://open.spotify.com/artist/59ewWwEHhZ0yq7SKXxUj0d?si=a6WhJSQNSNWNqw18dxGSEQ",
      instagram: "https://www.instagram.com/gespona_music/",
      soundcloud: "https://soundcloud.com/gespona",
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
          support: artist.support,
          image: artist.image,
          spotify: artist.spotify,
          instagram: artist.instagram,
          soundcloud: artist.soundcloud,
          beatport: artist.beatport,
        },
      },
    });
  });
};
