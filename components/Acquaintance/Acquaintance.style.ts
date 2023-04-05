import { breakpoints, palette } from '@/styles/globals.style';
import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${palette.primary};
  color: ${palette.textPrimary};
  padding-top: 55px;
  line-height: 1.2;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 0;
    display: flex;
    height: 385px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 485px;
  }
`;

export const Header = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin: 0 auto 20px auto;
  width: 238px;
  text-align: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    color: ${palette.textSecondary};
    width: 393px;
    margin: 0 auto 40px auto;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 491px;
    font-size: 25px;
    margin: 0 auto 45px auto;
  }
`;

export const TextWrapper = styled.div`
  margin: 0 auto 15px auto;
  width: 270px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-left: 0;
    margin-bottom: 0;
    padding-top: 24px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 540px;
    padding-top: 90px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  margin-bottom: 12px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const Address = styled.address`
  font-size: 14px;
  display: flex;
  font-style: normal;

  .icon {
    margin-right: 10px;
  }

  .address {
    width: 100px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 18px;

    .icon {
      margin-right: 15px;
    }

    .address {
      width: 129px;
    }
  }
`;

export const Map = styled.div`
  min-width: 295px;
  max-width: calc(100vw - 27px);
  height: 255px;
  border-top-right-radius: 110px;
  border-bottom-right-radius: 110px;
  background-color: #eee;
  margin-right: auto;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: calc(100vw - 355px);
    height: 100%;
    border-top-right-radius: 165px;
    border-bottom-right-radius: 165px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: calc(100vw - 770px);
    border-top-right-radius: 208px;
    border-bottom-right-radius: 208px;
  }

  iframe {
    border-top-right-radius: 110px;
    border-bottom-right-radius: 110px;

    @media screen and (min-width: ${breakpoints.tablet}) {
      border-top-right-radius: 165px;
      border-bottom-right-radius: 165px;
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
      border-top-right-radius: 208px;
      border-bottom-right-radius: 208px;
    }
  }
`;
