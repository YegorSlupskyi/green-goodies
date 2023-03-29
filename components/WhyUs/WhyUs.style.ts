import { breakpoints, palette } from '@/styles/globals.style';
import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${palette.regular};
  margin-top: 55px;
  color: ${palette.textSecondary};
  padding: 0 55px;
`;

export const Header = styled.h2`
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  margin-bottom: 38px;
  line-height: 1.2;

  @media screen and (min-width: ${breakpoints.tablet}){
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 25px;
    margin-bottom: 45px;
  }
`;

export const ArgumentList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: 125px;
  }
`;

export const Argument = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }

  max-width: 210px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;

export const ArgumentSymbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArgumentHeader = styled.p`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.2222;

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
    line-height: 1.2;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const ArgumentText = styled.p`
  font-size: 14px;
  text-align: center;
  line-height: 1.2143;

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 18px;
    line-height: 1.2222;
  }
`;
