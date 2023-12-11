// gatsby-node.js

const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const artistsData = [
    {
      title: "GESPONA",
      link: "gespona",
      description: "DJ / PRODUCER",
      info: "Gespona is a DJ / Producer from Barcelona and resident DJ for iconic clubs of his hometown, NOM Barcelona & Macarena Club.As a producer and with releases in many top labels of his genre, he has been in charge of produding a arsenal full of unreleased dance floor approved bombs wich are supported by artists like Mind Against, Echonomist, Oliver Koletzki, Massano, Lehar to name a few…",
      image: `gonCover.jpg`,
    },
    {
      title: "DJOLEE",
      link: "djolee",
      description: "DJ / PRODUCER",
      info: `Nicolas Marino a.k.a "Djolee" is a modern House / Techno DJ & Producer from Argentina based in Barcelona, Spain. Influenced by artists such as Trikk, Dixon & Sabo, he started his career as a DJ in 2015 and as a Producer in 2017. Although his preferred genre resembles Melodic House with a mix of organic, percussive and electric sounds, he has the virtue of adapting with versatility to a large quantity of musical lines that go from Afro-house / Melodic Techno to Indie Dance, or even Downtempo.`,
      image: `nicoCover.jpg`,
    },
    {
      title: "AMADORI",
      link: "amadori",
      description: "DJ / PRODUCER",
      info: "The argentinian producer Amadori currently lives in Barcelona since 2018, but he began his career as a DJ in Buenos Aires, performing at some of the clubs with more electronic music tradition such as Rio, Bahrein, Afrika, Shamrock Jet,and many more. In 2019, he started his residency at Nom Barcelona, one of the best clubs in the city, where he had the pleasure of sharing the DJ booth with artists such as Guy J, Sasha, Adana Twins, Jimi Jules, Tim Engelhardt, Alex Niggeman, Stephan Jolk, Jonas Saalbach, Musumeci, among many more.",
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
      info: "An outstanding Argentinian based in Barcelona artist who masterfully fuses the roots of melodic house & techno, creating a unique sound experience that captivates his audience. His ability to create immersive tracks is unparalleled, and his music is an invitation to a spatial journey of emotions and sensations. ",
      image: `abukCover.jpeg`,
    },
    {
      title: "APO LUCIA",
      link: "apolucia",
      description: "SINGER",
      info: "Agustin Giri is an Argentinan DJ & Music Producer who was born in Mar del Plata. From an early age, his keen interest in electronic music led him to explore musical production, opening a path of recognition in the local and international scene.",
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
