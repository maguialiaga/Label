import React from "react";
import styled from "styled-components";
import blackCapImg from "../assets/images/black.jpg";
import navyCapImg from "../assets/images/navy.jpg";
import vinylImg from "../assets/images/vinyl2.jpg";

const ShopSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 100px 20px 80px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 50px;
  margin-left: 50px;
  background: white;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 960px) {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  padding: 10px;
  background: white;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const ProductTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #000;
`;

const ProductPrice = styled.p`
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  font-weight: 300;
  color: #111;
`;

const BuyButton = styled.a`
  margin-top: 10px;
  margin-bottom: 50px;
  display: inline-block;
  padding: 10px 20px;
  background: white;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  border: solid black;
  transition: 0.3s ease;

  &:hover {
    background: black;
    color: white;
  }
`;

const Shop = () => {
  const products = [
    {
      title: "Panorama 2 Vinyl",
      price: "€20,00 + Shipping + VAT",
      image: vinylImg,
      link: "https://rummel.bandcamp.com/album/panorama-2",
    },
    {
      title: "Black Cap",
      price: "€25,00 + Shipping + VAT",
      image: blackCapImg,
      link: "https://rummel.bandcamp.com/merch/rummel-cap-black",
    },
    {
      title: "Navy Cap",
      price: "€25,00 + Shipping + VAT",
      image: navyCapImg,
      link: "https://rummel.bandcamp.com/merch/rummel-cap-navy-blue",
    },
  ];

  return (
    <ShopSection>
      {products.map((product, index) => (
        <ProductCard key={index}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <BuyButton
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </BuyButton>
          </ProductInfo>
        </ProductCard>
      ))}
    </ShopSection>
  );
};

export default Shop;
