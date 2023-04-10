import styled from 'styled-components';
import { headerHeight } from '../Layout/Layout.style';
import { cubicBezier, breakpoints, palette } from '@/styles/globals.style';

export const MobileMenuWrapper = styled.div`
  width: 320px;
  max-width: 320px;
  height: calc(100vh - ${headerHeight.mobile} - 0.5px);
  background-color: ${palette.primary};
  position: absolute;
  top: ${headerHeight.mobile};
  left: -320px;
  transition: transform 350ms ${cubicBezier()};
  transform: translateX(0);
  z-index: 0;
  border-top: 0.5px solid #fff;
  overflow-y: scroll;

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: calc(100vh - ${headerHeight.desktop});
  }

  &.show {
    transform: translateX(320px);
  }
`;

export const MenuBlock = styled.div`
  padding: 50px 15px;
  &:not(:last-child) {
    border-bottom: 0.5px solid #fff;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlockHead = styled.div`
  color: ${palette.textPrimary};
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const BlockText = styled.p`
  color: ${palette.textPrimary};
  font-size: 18px;
  line-height: 1.22;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
