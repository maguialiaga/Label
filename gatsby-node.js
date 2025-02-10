// gatsby-node.js

const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const artistsData = [
    {
      title: "ABUK",
      link: "abuk",
      description: "DJ / PRODUCER",
      info: "Abuk blends melodic house and techno into captivating journeys, transporting listeners to timeless, emotional soundscapes, while exploring various genres in his sets.",
      released: "Siamese, Rennaisance, Amancay, Stil Vor Talent, Rummel",
      support:
        "Dixon, John Digweed, Solomun, Adriatique, Trikk, Hernan Cattaneo",
      image: `abukCover.jpg`,
      spotify:
        "https://open.spotify.com/intl-es/artist/4kYAGDsAQjBYuWNNBJNnNv?si=4xrLBydvQiuVKfi7OE2HBQ",
      instagram:
        "https://www.instagram.com/abukmusic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      soundcloud: "https://on.soundcloud.com/NoWG6xeYo7TZpZrU8",
    },
    {
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      description: "DJ / PRODUCER",
      info: "Agustin Giri is a versatile DJ and producer, known for his ability to blend various genres seamlessly in his performances.",
      released: "Innervisions, Rummel, Amancay, TAU, Isolate",
      support:
        "Âme, Tale Of Us, John Digweed, Jimi Jules, Mano Le Tough, Damian Lazarus",
      image: `giriCover.jpg`,
      spotify:
        "https://open.spotify.com/intl-es/artist/7zXtvsjXDrLakTsrs63fM5?si=0zPouf3DSROyHcHTEj3ECw",
      instagram:
        "https://www.instagram.com/agustingiri_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      soundcloud: "https://on.soundcloud.com/52REGqZdRziK3ue48",
    },
    {
      title: "AMADORI",
      link: "amadori",
      description: "DJ / PRODUCER",
      info: "Argentinian DJ & Producer now based in Barcelona. His sound is characterized by being full of intricate rhythms, groovy basslines, and atmospheric textures, with an organic touch of tribal-inspired percussion ",
      released: "Rebellion der Träumer, Rummel, Blindfold , Stil Vor Talent",
      support:
        "Oliver Koletzki, Mira, Ivory, Hernan Cattaneo, Lee Burridge, Dave Seaman",
      image: `jeroCover.jpg`,
      spotify:
        "https://open.spotify.com/intl-es/artist/2Hqclfa5fARgem28jrntwC?si=JJoz9BDyTAqePHPzTTcrCA",
      instagram:
        "https://www.instagram.com/amadorimusic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      soundcloud: "https://on.soundcloud.com/nG8YgcTKjGKxWYzJ9",
    },
    {
      title: "DJOLEE",
      link: "djolee",
      description: "DJ / PRODUCER",
      info: `Modern House/Techno DJ & Producer based in Barcelona. His artistic vision trascends genres, always striving to deliver a storytelling experience enriched with eclectic sounds`,
      released: "Stil Vor Talent, Rummel, Radikon, Multinotes",
      support:
        "Dixon, Laurent Garnier, Mind Against, John Digweed, Adriatique, Trikk, Mano Le Tough, Who Made Who, Oliver Koletzki",
      image: `nicoCover.jpg`,
      spotify:
        "https://open.spotify.com/intl-es/artist/1HfGJTanZiMBHskJLQkRxL?si=D41doooPSxeiWDG9mnS9PQ",
      instagram: "https://www.instagram.com/djolee.music/",
      soundcloud: "https://soundcloud.com/djolee_music",
    },
    {
      title: "GESPONA",
      link: "gespona",
      description: "DJ / PRODUCER",
      info: "Stil Vor Talent, Rummel, Radikon, Multinotes",
      released: "Stil Vor Talent, Rummel, Radikon, Multinotes",
      support:
        "Solomun,Dixon, Mind Against,Laurent Garnier, Mano Le Tough, Âme, Vintage Culture, Trikk",
      image: `gonCover.jpg`,
      spotify:
        "https://open.spotify.com/artist/59ewWwEHhZ0yq7SKXxUj0d?si=a6WhJSQNSNWNqw18dxGSEQ",
      instagram: "https://www.instagram.com/gespona_music/",
      soundcloud: "https://soundcloud.com/gespona",
    },
    {
      title: "LAST MEN ON EARTH",
      link: "lastmenonearth",
      description: "DJ / PRODUCER",
      info: "Musical endeavor made up of Eugenio Perez and Sebastian Passo with a unique sound fusing House and Techno.",
      released: "TAU, Get Physical, Rummel, Amancay, Kiosk ID, Renaissance",
      support:
        "Dixon, Âme, Mano Le Tough, Damian Lazarus, Mind Against, John Digweed, Trikk, Echonomist",
      image: `lastmenCover.jpg`,
      spotify:
        "https://open.spotify.com/intl-es/artist/4aUgXgIAcqvWeMjweQWTKy?si=RZBwmCCTThOfRFpn3d-hWA",
      instagram:
        "https://www.instagram.com/lastmenonearth_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      soundcloud: "https://soundcloud.com/gespona",
    },
  ];

  artistsData.forEach((artist) => {
    createPage({
      path: `/artists/${artist.link}`,
      component: require.resolve("./src/templates/artistTemplate.js"),
      context: {
        artist: {
          title: artist.title,
          description: artist.description,
          info: artist.info,
          released: artist.released,
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
