import React from 'react'
import styled from 'styled-components';


const Burger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  width: 32px;
  height: 32px;

  div {
    background-color: var(--color-secondary);
    width: 35px;
    height: 5px;
    border-radius: 15px;
    transition: transform 0.5s ease, opacity 0.3s ease;


    &:nth-child(1) {
      transform: ${(props) => (props.active ? 'rotate(47deg) translateY(8px) translateX(8px)' : 'none')};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.active ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.active ? 'rotate(-47deg) translateY(-6px) translateX(6px)' : 'none')};
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const Hamburger = ({handleToggle, isActive}) => {

  return (
    <Burger active={isActive} onClick={handleToggle}>
      <div></div>
      <div></div>
      <div></div>
    </Burger>
  );
};

export default Hamburger