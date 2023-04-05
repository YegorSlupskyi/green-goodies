import styled from 'styled-components';
import { breakpoints, palette } from '@/styles/globals.style';

export const Wrapper = styled.section`
  padding: 55px;
  background-color: ${palette.regular};

  @media screen and (min-width: ${breakpoints.tablet}) {
   padding: 70px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 100px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 210px;
  line-height: 1.2;
  color: ${palette.textSecondary};

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 690px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 1060px;
  }
`;
export const Header = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  margin-bottom: 35px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 25px;
    margin-bottom: 45px;
  }
`;

export const EventList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: 80px;
  }
`;

export const Event = styled.li`

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 300px;
  }

  .headWrapper {
    padding-left: 5px;
    padding-right: 5px;

    @media screen and (min-width: ${breakpoints.desktop}) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .head {
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(2n + 1) .head {
    border-color: ${palette.primary};
  }

  &:nth-child(2n) .head {
    border-color: ${palette.secondary};
  }

  h3 {
    font-weight: 300;
    font-size: 18px;
    margin-top: 15px;

    @media screen and (min-width: ${breakpoints.desktop}) {
      font-size: 20px;
      margin-top: 20px;
    }
  }

  .body {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 18px;
    display: inline-block;
    margin-bottom: 10px;
    text-align: center;

    @media screen and (min-width: ${breakpoints.desktop}) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 14px;
    text-align: center;
    width: 100%;

    @media screen and (min-width: ${breakpoints.desktop}) {
      font-size: 18px;
    }
  }
`;
