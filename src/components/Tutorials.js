import React, { useEffect } from "react";
import styled from "styled-components";
import makumba from "../assets/images/makumba.png";
import malabares from "../assets/images/malabares.png";
import luxinterior from "../assets/images/luxinterior.png";
import semuta from "../assets/images/semuta.png";
import faderrr from "../assets/images/fader&stepout.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 100px 20px 40px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 50px;
  margin-left: 50px;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 960px) {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const TutorialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  /* border-radius: 5px; */
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardDescription = styled.div`
  padding: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: #111;
  text-align: center;
`;
const tutorials = [
  {
    image: makumba,
    description: "Masterclass | Djolee | Ma kumba",
    link: "https://www.patreon.com/Rummel/shop/masterclass-djolee-ma-kumba-1578060?source=storefront",
  },
  {
    image: malabares,
    description: "Masterclass | Gespona | Malabares",
    link: "https://www.patreon.com/Rummel/shop/masterclass-gespona-malabares-1577964?source=storefront",
  },
  {
    image: luxinterior,
    description: "Masterclass | Fabricio Mosoni | Lux Interior",
    link: "https://www.patreon.com/Rummel/shop/masterclass-fabricio-mosoni-lux-interior-1577919?source=storefront",
  },
  {
    image: semuta,
    description: "Masterclass | Agustin Giri | Semuta",
    link: "https://www.patreon.com/Rummel/shop/masterclass-agustin-giri-semuta-1577866?source=storefront",
  },
  {
    image: faderrr,
    description: "Masterclass | Gespona | FadeRRR & Step Out",
    link: "https://www.patreon.com/Rummel/shop/masterclass-gespona-faderrr-step-out-539478?source=storefront",
  },
];

const Tutorials = () => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <PageWrapper ref={ref}>
      <TutorialsGrid
        initial={initial}
        transition={{ delay: 0.3, duration: 0.6 }}
        animate={animation}
      >
        {tutorials.map((tutorial, index) => (
          <CardLink
            initial={initial}
            transition={{ delay: 0.3, duration: 0.6 }}
            animate={animation}
            href={tutorial.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardImage src={tutorial.image} alt={tutorial.description} />
            <CardDescription>{tutorial.description}</CardDescription>
          </CardLink>
        ))}
      </TutorialsGrid>
    </PageWrapper>
  );
};

export default Tutorials;
