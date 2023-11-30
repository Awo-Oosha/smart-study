import React from 'react';
import { Container } from '../styles';
import { Nav_Data } from '../constants';
import styled from 'styled-components';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';

const Header = styled.header`
`;

const NavContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    img {
      width: 48px;
      heigth: 48px;
      object-fit: contain;
    }
  }
`;

const BrandName = styled.div`
  color: var(--color-secondary);
  font-family: var(--font-source);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Nav = styled.nav`
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
  flex-direction: row;
  align-items: center;
  gap: 24px;

  div {
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

    }
  }
`; 

const Navbar = () => {
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
        </Nav>

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
      </NavContainer>
    </Header>
  )
}

export default Navbar