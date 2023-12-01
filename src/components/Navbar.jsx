import React, { useState } from 'react';
import { Container } from '../styles';
import { Nav_Data } from '../constants';
import styled from 'styled-components';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = styled.header`
`;

const NavContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 29px;
  position: relative;

  @media (min-width: 992px) {
    justify-contents: space-around;
    padding: 0 53px;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    img {
      width: 32px;
      heigth: 32px;
      object-fit: contain;
    }
  }

  @media (min-width: 992px) {
    div {
      img {
        width: 48px;
        heigth: 48px;
      }
    }
  }
`;

const BrandName = styled.div`
  color: var(--color-secondary);
  font-family: var(--font-source);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 992px) {
    font-size: 24px;
  }
`;

const Nav = styled.nav`

  display: none;
  flex-direction: row;
  gap: 50px;
  align-items: center;

  @media (min-width: 992px) {
    display: flex !important;
  }

  ul {
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 24px;

    li {
      text-transform: capitalize;
      text-align: center;
      font-family: var(--font-open);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.32px;
      padding: 12px 4px;
      
      }

      a {
        margin: 0;
        padding: 0;
        color: var(--color-gray);
      }
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0 12px;

  div {
    width: 100%;
    p {
      color: var(--color-primary);
      padding: 12px 24px;
      text-align: center;
      font-family: var(--font-open);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 48px; /* 300% */
      letter-spacing: -0.32px;
      cursor: pointer;
      width: 100%;
    }

    button {
      border: none;
      background: var(--color-primary);
      color: var(--color-white);
      padding: 12px 24px;
      font-family: var(--font-source);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      border-radius: var(--button-radius);
      cursor: pointer;
      width: 100%;

    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 24;
    align-items: center;
  }
`; 

const MobileNav = styled.nav`
  position: fixed;
  right: ${(props) => (props.active ? "0" : "-100%")};
  top: 70px;
  min-height: 100vh;
  border-left: 4px solid var(--color-primary);
  background-color: var(--color-background);
  transition: all 0.5s ease;
  z-index: 1;


  ul {
    margin: 0;
    list-style: none;
    display: column;
    align-items: center;

    li {
      text-transform: capitalize;
      text-align: left;
      font-family: var(--font-open);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.32px;
      padding: 12px 30px;

      a {
        margin: 0;
        padding: 0;
        color: var(--color-gray);
      }
    }
  }

  @media (min-width: 992px) {
    display: none !important;
  }
`;


const Navbar = () => {

  const [navToggle, setNavToggle] = useState(false);


  const handleNaw = () => {
    setNavToggle(!navToggle)
  }

  return (
    <Header>
      <NavContainer>
        <Brand>
          <div>
            <img src={Logo} alt="Logo_img" />
          </div>
          <div>
            <BrandName>
              SmartStudyHub
            </BrandName>
          </div>
        </Brand>

        <Nav>
          <ul>
            {Nav_Data.map((nav, id) => (
              <li key={id}>
                <Link to={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>

          <NavActions>
            <div>
              <p>LogIn</p>
            </div>
            <div>
              <button>
                Register
              </button>
            </div>
          </NavActions>
        </Nav>

        <Hamburger  toggleNav={handleNaw}/>

        <MobileNav active={navToggle}>
          <ul>
            {Nav_Data.map((nav, id) => (
              <li key={id} onClick={() => (setNavToggle(!navToggle))}>
                <Link to={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>

          <NavActions>
            <div>
              <p>LogIn</p>
            </div>
            <div>
              <button>
                Register
              </button>
            </div>
          </NavActions>
        </MobileNav>

      </NavContainer>
    </Header>
  )
}

export default Navbar