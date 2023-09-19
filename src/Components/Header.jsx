import React from 'react';
import styled from 'styled-components';
import IrohPixel from '../assets/IrohPixel.svg';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
`;

const SvgWrapper = styled.img`
  width: 125px; 
  animation: wiggle .9s infinite;

`;

function Header() {
  return (
    <HeaderWrapper>
      <SvgWrapper src={IrohPixel} alt="pixelated uncle iroh" />
      <h1>Uncle Iroh's Tea Shop</h1>
      <SvgWrapper src={IrohPixel} alt="pixelated uncle iroh" />
    </HeaderWrapper>
  );
}

export default Header;

