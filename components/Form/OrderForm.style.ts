import { breakpoints, palette } from '@/styles/globals.style';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 55px;
  padding-left: 25px;
  padding-right: 15px;
  padding-bottom: 55px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-top: 90px;
    padding-bottom: 70px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  line-height: 1.2;
  width: 280px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 680px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 730px;
  }
`;

export const Header = styled.h2`
  font-weight: 300;
  font-size: 20px;
  color: ${palette.textSecondary};
  text-align: center;
  line-height: 1.2;

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 25px;
  }
`;

export const Form = styled.form`
  position: relative;
  padding: 46px 30px 56px 20px;
  border: 1px solid ${palette.secondary};
  border-radius: 8px;
  margin-top: 45px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 50px;
    padding: 46px 55px 56px 85px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-top: 55px;
    padding: 48px 105px 57px 85px;
  }

  &&::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border: 1px solid ${palette.primary};
    border-radius: 8px;
    z-index: -1;
  }

  div.input-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 30px;
  }
`;

export const Name = styled.p`
  font-weight: 300;
  color: ${palette.textSecondary};
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-bottom: 35px;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  color: ${palette.primary};
  padding-bottom: 5px;
  border-bottom: 1px solid ${palette.primary};

  &::placeholder {
    color: ${palette.primary};
  }
`;

export const Submit = styled.button`
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.textSecondary};
  padding: 7px 0 6px 0;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.2;
  font-family: 'Alegreya Sans';
  margin-top: 35px;
  background-color: ${palette.secondary};
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${breakpoints.tablet}){
    width: 350px;
  }

`;
