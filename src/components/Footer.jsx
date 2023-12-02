import React from 'react'
import styled from 'styled-components';
import { Container } from '../styles';
import { Logo } from '../assets';
import { Social_Links } from '../constants';
import { useNavigate } from 'react-router-dom';

const FooterTag = styled.footer`
  background: var(--color-secondary);
  margin: 0;
  padding: 0;
`;

const FooterCon = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px ;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 45px ;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
  }

  p {
    color: var(--color-white);
    font-family: var(--font-source);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media (min-width: 992px) {
    img {
      width: 48px;
      height: 48px;
    }
    
    p {
      font-size: 24px;
    }
  }
`;

const Copyright = styled.div`
  color: var(--color-white);
  font-family: var(--font-poppins);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;

  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 23px;
`;

const Footer = () => {
  const navigate = useNavigate;

  return (
    <FooterTag>
      <FooterCon>
        <Brand>
          <img src={Logo} alt='logo' />
          <p>SmartStudyHub</p>
        </Brand>

        <Copyright>
          &copy; SmartStudyHub. All rights reserved.
        </Copyright>

        <Socials>
          {Social_Links.map((item, key) => (
            <div key={key} onClick={() => (navigate(item.link))}>
              <img src={item.icon} alt={item.name} /> 
            </div>
          ))}
        </Socials>
      </FooterCon>
    </FooterTag>
  )
}

export default Footer