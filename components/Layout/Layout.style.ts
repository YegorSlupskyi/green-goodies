import styled from 'styled-components';
import { Adaptive, breakpoints, palette } from '@/styles/globals.style';

export const headerHeight: Adaptive = {
  mobile: '50px',
  tablet: '50px',
  desktop: '80px',
};

export const Header = styled.header`
  height: ${headerHeight.mobile};
  width: 100%;
  background-color: ${palette.primary};
  padding-top: 14px;
  padding-bottom: 14px;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: ${headerHeight.desktop};
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${palette.textPrimary};
`;

export const BurgerMenuButton = styled.button`
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const BrandName = styled.h1`
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: ${palette.textPrimary};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 30px;
    position: static;
    transform: none;
    left: none;
  }
`;

export const BrandContainer = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
`;

export const LogoWrapper = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-right: 50px;
  }
`;

export const Instagram = styled.p`
  font-size: 20px;
  line-height: 1.2;
  color: ${palette.textPrimary};
`;
