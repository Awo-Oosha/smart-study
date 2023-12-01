import React, {useState} from 'react';
import styled from 'styled-components';
import { Eye, EyeSlash } from 'phosphor-react';

const Container = styled.div`
  margin-top: 29px;
  margin-bottom: 56px;
  background: var(--color-white);
  border-radius: 15px;
  width: 100%;
  padding: 48px 12px;

  h3 {
    color: var(--color-secondary);
    font-family: var(--font-source);
    font-size: 23px;
    font-style: normal;
    line-height: normal;
    margin-bottom: 32px;
  }

  @media (min-width: 992px) {
    padding: 35px 76px;
    width: 675px;

    h3{
      font-size: 32px;
    }
  }

  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  

  div {
    display: flex;
    flex-direction: column;
    position: relative;


    label {
      color: #666;
      font-family: var(--font-source);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-bottom: 7px;
    }

    input {
      border-radius: 12px;
      border: 1px solid var(--color-gray);
      padding: 9px 18px;

      &::placeholder {
        color: var(--color-gray);
        font-family: var(--font-open);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 187.5% */
      }
    }

    select {

      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 12px;
      cursor: pointer;
      font-family: var(--font-open);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;

    }

    p {
      text-align: left;
      padding: 8px auto;
      color: var(--color-secondary);
      font-family: var(--font-source);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      span {
        color: var(--color-primary);
        cursor: pointer;
      }
    }

    .login {
      text-align: center;

      span {
        font-weight: 600;
      }
    }

    button {
      border: none;
      border-radius: var(--button-radius);
      background: var(--color-gray);
      color: var(--color-white);
      text-align: center;
      font-family: var(--font-source);
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 15px 0;
      cursor: pointer;
    }
  }
`;

const Visibility = styled.div`
  position: absolute;
  top: -30px;
  right: -90%;
  cursor: pointer;
  width: fit-content;

  @media (min-width: 992px) {
    right: -93%;
  }
`;

const RegisterationForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  return (
    <Container>
      <h3>Create Your SmartStudy Hub Account</h3>
      <Form>
        <div>
          <label htmlFor='email'>Email address</label>
          <input type='email' name='email' id='email' placeholder='samuel@gmail.com' />
        </div>

        <div>
          <label htmlFor='fullname'>Full Name</label>
          <input type='text' name='fullname' id='fullname' placeholder='Samuel Amos' />
        </div>

        <div>
          <label htmlFor='gender'>Select Gender</label>
          <select placeholder='--Select Gender--'>
            <option value="nil" disabled>--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

       <div>
         <label htmlFor='school'>Select School</label>
          <select placeholder='--Select School--'>
            <option value="nil" disab>--Select School--</option>
          </select>
       </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input 
            type= {
              showPassword ? "text" : "password"
            } 
            name='password' 
            id='password' 
            placeholder='password'
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
          <Visibility
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
          >
            {showPassword ? 
            <Eye weight='fill' size={24} color='#666666CC' /> 
            : <EyeSlash weight='fill' size={24} color='#666666CC' 
          />}
          </Visibility>
        </div>

        <div>
          <label htmlFor='confirm'>Confirm Password</label>
          <input 
            type= {
              showPassword ? "text" : "password"
            } 
            name='confirm' 
            id='confirm' 
            placeholder='Confirm Password'
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Visibility
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
          >
            {showPassword ? 
            <Eye weight='fill' size={24} color='#666666CC' /> 
            : <EyeSlash weight='fill' size={24} color='#666666CC' 
          />}
          </Visibility>
        </div>

        <div>
          <p>By continuing, you agree to the <span>Terms of use</span> and <span>Privacy Policy</span></p>
        </div>

        <div>
          <button>Sign Up</button>
        </div>

        <div>
          <p className='login'>Already a user? <span>Sign in</span></p>
        </div>
      </Form>
    </Container>
  )
}

export default RegisterationForm;