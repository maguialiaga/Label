import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import logoNegro from "../assets/images/rummel-negro.png";
import logoBlanco from "../assets/images/rummel-blanco.png";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import { IconContext } from "react-icons";

const Nav = styled.nav`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 50px;
  color: ${({ navColor }) => (navColor === "white" ? "white" : "black")};
  @media screen and (max-width: 960px) {
    padding-left: 20px;
    transition: 0.8s all ease;
  }
`;

const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
  margin-left: 3rem;
  margin-top: 20px;
  color: ${({ navColor }) => (navColor === "white" ? "white" : "black")};
  @media screen and (max-width: 960px) {
    margin-left: 1rem;
    margin-top: 20px;
  }
`;

const NavIcon = styled.img`
  margin-right: 0 0.5rem;
  width: 9rem;
  color: ${({ navColor }) => (navColor === "white" ? "white" : "black")};
`;

const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  color: ${({ navColor }) => (navColor === "white" ? "white" : "black")};
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 50vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    visibility: ${({ click }) => (click ? "visible" : "hidden")};
    transform: translateY(${({ click }) => (click ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: ${({ navColor }) =>
      navColor === "black" ? "white" : "black"};
    /* background-color: #787276; */
    /* background-color: rgb(255, 255, 255); */
  }
  > li:first-child {
    margin-left: auto;
  }
`;

const NavItem = styled.li`
  height: 60px;
  font-size: 14px;
  cursor: pointer;
  /* font-family: "Quicksand", sans-serif; */
  /* font-family: "Roboto Mono", monospace; */
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled(Link)`
  display: flex;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 2rem;
  bottom: 1px;
  height: 100%;
  color: ${({ navColor }) => (navColor === "white" ? "white" : "black")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ navColor }) =>
      navColor === "white" ? "white" : "black"};
    transition: width 0.2s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 30%;
    }
  }
`;

//DATA
const data = [
  {
    to: "/artists",
    text: "ARTISTS",
    id: "artists",
  },
  {
    to: "/requests",
    text: "REQUEST",
    id: "request",
  },
  {
    to: "/music",
    text: "MUSIC",
    id: "music",
  },
  // {
  //   to: "/masterclass",
  //   text: "MASTERCLASS",
  //   id: "masterclass",
  // },
  // {
  //   to: "/events",
  //   text: "EVENTS",
  //   id: "events",
  // },
];

export default function Navbar({ navColor }) {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  const logoSrc = navColor === "white" ? logoBlanco : logoNegro;

  return (
    <>
      <IconContext.Provider value={{ color: "#131313" }}>
        <Nav active={scroll} click={click} navColor={navColor}>
          <NavLogo to="/" navColor={navColor} onClick={closeMobileMenu}>
            <NavIcon src={logoSrc} alt="logo" />
          </NavLogo>
          <MobileIcon onClick={handleClick} navColor={navColor}>
            {click ? (
              <FiX
                style={{ color: navColor === "white" ? "white" : "black" }}
              />
            ) : (
              <FiMenu
                style={{ color: navColor === "white" ? "white" : "black" }}
              />
            )}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click} navColor={navColor}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks to={el.to} navColor={navColor}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
