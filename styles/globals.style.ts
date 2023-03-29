import styled from 'styled-components';

export type Device = 'mobile' | 'tablet' | 'desktop';
export interface Adaptive {
  mobile: number | string;
  tablet: number | string;
  desktop: number | string;
}

export const mobileBreakpoint = '480px';
export const tabletBreakpoint = '800px';
export const desktopBreakpoint = '1200px';

export const breakpoints = {
  mobile: mobileBreakpoint,
  tablet: tabletBreakpoint,
  desktop: desktopBreakpoint,
};

export const primaryColor = '#89C0C0';
export const secondaryColor = '#FFBDBD';
export const primaryTextColor = '#FFFFFF';
export const secondaryTextColor = '#344949';
export const regularBgColor = '#FFFFFF';

export const palette = {
  primary: primaryColor,
  secondary: secondaryColor,
  textPrimary: primaryTextColor,
  textSecondary: secondaryTextColor,
  regular: regularBgColor,
};

export type ContainerProps = {
  noPadding?: boolean;
};
export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: ${(props) => (props.noPadding ? '0' : '0 15px')};

  width: 100%;

  @media screen and (min-width: ${mobileBreakpoint}) {
    width: ${mobileBreakpoint};
  }

  @media screen and (min-width: ${tabletBreakpoint}) {
    width: ${tabletBreakpoint};
  }

  @media screen and (min-width: ${desktopBreakpoint}) {
    width: ${desktopBreakpoint};
  }
`;

export const transitionTime = '250ms';
export const cubicBezier = (
  x: number = 0.4,
  y: number = 0,
  z: number = 0.2,
  t: number = 1
) => `cubic-bezier(${x}, ${y}, ${z}, ${t})`;
