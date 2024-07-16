import React from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";



const Wrapper = styled.header`
  background-color: #dfa4a4;
  padding: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
`;

const Logo = styled.img`
width: 160px;
`;

const Menu = styled.div`
    display: flex;
    gap: 50px;
    color: white;

`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function Header() {
  // const navigate =  useNavigate();


  return (
  <>
    <Wrapper>
      <Logo src="/logo.webp" alt="Brand Logo" />
      <Menu>
        <span>Home</span>
        <span>Clothing</span>
        <span>Accessories</span>
      </Menu>
      <IconContainer>
      <IoSearchOutline/>
      <BsCart3/>
      <FaRegUserCircle />
      </IconContainer>
    </Wrapper>
    </>
  );
}

export default Header;