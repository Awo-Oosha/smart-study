import React from 'react'
import styled from 'styled-components';
import RegisterationForm from '../components/Register/RegisterationForm';


const RegisterSection = styled.section`
  background: var(--color-background);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  padding: 0 12px; 
`;

const Container = styled.div``;

const Register = () => {
  return (
    <RegisterSection>
      <RegisterationForm />
    </RegisterSection>
  )
}

export default Register