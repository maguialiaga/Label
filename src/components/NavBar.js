import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import logo from "../assets/images/rummel-negro.png";
import { FiMenu, FiX } from "react-icons/fi";
import { IconContext } from "react-icons";

//STYLES

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
`;

const NavIcon = styled.img`
  margin-right: 0 0.5rem;
  width: 9rem;
`;

const MobileIcon = styled.div`
  display: none;
  z-index: 50;
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
    /* background-color: rgb(0, 0, 0, 0.6); */
    background-color: rgb(255, 255, 255);
  }
  > li:first-child {
    margin-left: auto;
  }
`;

const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled(Link)`
  color: black;
  display: flex;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    /* text-decoration: underline; */
    color: rgb(105, 105, 105);
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      /* text-decoration: underline; */
      color: rgb(105, 105, 105);
      transition: all 0.3s ease;
    }
  }
`;

//DATA
const data = [
  {
    to: "/roaster",
    text: "ROASTER",
    id: "roaster",
  },
  {
    to: "/music",
    text: "MUSIC",
    id: "music",
  },
];

export default function Navbar() {
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

  return (
    <>
      <IconContext.Provider value={{ color: "#131313" }}>
        <Nav active={scroll} click={click}>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon src={logo} alt="logo" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks to={el.to}>{el.text}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
