import { useDeviceType } from '@/hooks/useWindowSize';
import { breakpoints, palette } from '@/styles/globals.style';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: ${palette.regular};
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const ImageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 0;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-bottom: 45px;
  }
`;

const NotFoundText = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto;
  color: ${palette.textSecondary};

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 25px;
  }
`;

const GoToHome = styled.div`
  background-color: ${palette.secondary};
  height: 35px;
  width: 230px;
  margin: 30px auto 0 auto;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  a {
    color: ${palette.textSecondary} !important;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 350px;
  }
`;

const NotFound = () => {
  const { mobile, tablet, desktop } = useDeviceType();

  return (
    <Wrapper>
      <Content>
        <ImageWrapper>
          <Image
            src={
              mobile
                ? '/images/404_mobile.png'
                : tablet
                ? '/images/404_tablet.png'
                : '/images/404_desktop.png'
            }
            width={desktop ? 510 : 255}
            height={desktop ? 220 : 110}
            alt={'404'}
            unoptimized
          />
        </ImageWrapper>
        <NotFoundText>
          OMG!
          {mobile ? <br /> : ' '}
          Your desserts seem to have burned!
        </NotFoundText>
        <GoToHome>
          <Link href='/'>Go to the Home Page</Link>
        </GoToHome>
      </Content>
    </Wrapper>
  );
};

export default NotFound;
