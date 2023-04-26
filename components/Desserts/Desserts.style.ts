import styled from 'styled-components';
import { palette, breakpoints } from '@/styles/globals.style';

export const Wrapper = styled.section`
  background-color: ${palette.regular};
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    width: ${breakpoints.mobile};
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${breakpoints.tablet};
    padding: 0 60px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: ${breakpoints.desktop};
  }
`;

export const Header = styled.h2`
  line-height: 1.2;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  margin-bottom: 40px;
  color: ${palette.textSecondary};

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 25px;
    margin-bottom: 56px;
  }
`;

export const DessertsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  row-gap: 35px;
  width: 100%;
  background-color: white;

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 29px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    row-gap: 41px;
  }
`;

export const DessertCard = styled.li`
  &:nth-child(4n + 1) > div::before {
    border-color: ${palette.primary};
  }

  &:nth-child(4n + 2) > div::before {
    border-color: ${palette.secondary};
  }

  &:nth-child(4n + 3) > div::before {
    border-color: ${palette.secondary};
  }

  &:nth-child(4n) > div::before {
    border-color: ${palette.primary};
  }

  &:nth-child(4n + 1) > button {
    background-color: ${palette.secondary};
  }

  &:nth-child(4n + 2) > button {
    background-color: ${palette.primary};
  }

  &:nth-child(4n + 3) > button {
    background-color: ${palette.primary};
  }

  &:nth-child(4n) > button {
    background-color: ${palette.secondary};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 133px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 10px;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid;
    z-index: 1;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 205px;
    height: 205px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 340px;
    height: 340px;

    &::before {
      top: -11px;
      left: -10px;
    }
  }
`;

export const Title = styled.h3`
  font-weight: 300;
  line-height: 1.2;
  font-size: 16px;
  color: ${palette.textSecondary};
  text-align: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

export const Units = styled.p`
  font-weight: 300;
  line-height: 1.2;
  font-size: 12px;
  color: ${palette.textSecondary};
  text-align: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const OrderButton = styled.button`
  border-radius: 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;
  color: ${palette.textSecondary};
  height: 30px;
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    font-weight: 400;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-top: 10px;
    height: 35px;
  }
`;
