import { breakpoints, palette } from '@/styles/globals.style';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${palette.primary};
  width: 100%;
  height: 50px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 49px 0 40px 0;
    height: 282px;
  }
`;

export const AllRights = styled.p`
  padding: 8px 0;
  width: 168px;
  margin: 0 auto;
  color: ${palette.textPrimary};
  font-weight: 300;
  line-height: 1.2;
  font-size: 14px;
  text-align: center;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 0;
    margin-top: 46px;
  }
`;

export const Content = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    padding-left: 165px;
    margin-right: auto;
  }
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 70px;
  margin-right: 90px;
`;

export const Contacts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Group = styled.div`
  font-weight: 300;
  line-height: 1.2;
  color: ${palette.textPrimary};
  width: 300px;

  p.header {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p.link {
    font-size: 18px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
