import styled from 'styled-components';
import { breakpoints, palette } from '@/styles/globals.style';

export const Wrapper = styled.section`
  height: 100%;
  position: relative;
  background-color: ${palette.regular};

  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 445px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 670px;
  }
`;

export const HeroContainer = styled.div`
  height: 430px;
  width: 320px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: ${breakpoints.mobile}) {
    width: ${breakpoints.mobile};
  }
`;

export const HeroImage = styled.div`
  height: 430px;
  width: 320px;
  background-image: url('/images/hero-mobile.jpg');
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${breakpoints.tablet}) {
    background-image: url('/images/hero-tablet.jpg');
    height: 100%;
    width: 595px;
    top: 0;
    right: 0;
    left: auto;
    transform: none;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    background-image: url('/images/hero-desktop.jpg');
    width: 895px;
  }
`;

export const HeroTextBlock = styled.div`
  color: ${palette.textSecondary};
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
    position: absolute;
    left: 55px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    left: 165px;
  }
`;

export const HeroHeader = styled.h2`
  font-size: 50px;
  font-weight: 300;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 50px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 70px;
  }
`;

export const HeroSubheader = styled.p`
  font-size: 25px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 40px;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: ${breakpoints.tablet}){
    left: auto;
    right: 54px;
    transform: translateY(-50%);
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    right: 296px;
  }
`;
