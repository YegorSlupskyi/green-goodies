import { ReactNode, useState } from 'react';
import {
  Header,
  BurgerMenuButton,
  HeaderWrapper,
  BrandName,
  BrandContainer,
  LogoWrapper,
  Instagram,
} from './Layout.style';
import { Container } from '@/styles/globals.style';
import Icon from '../Icon';
import icons from '@/utils/sprite';
import { useDeviceType } from '@/hooks/useWindowSize';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';
import Footer from '../Footer/Footer';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { desktop } = useDeviceType();
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            {!desktop && (
              <BurgerMenuButton onClick={() => setMobileMenuShown((s) => !s)}>
                <Icon icon={icons.burgerMenu} />
              </BurgerMenuButton>
            )}
            {!desktop && <BrandName>Green Goodies</BrandName>}
            {desktop && (
              <>
                <BrandContainer>
                  <LogoWrapper>
                    <Link href='/'>
                      <Icon icon={icons.logo} width={100} height={70} />
                    </Link>
                  </LogoWrapper>
                  <BrandName>Green Goodies</BrandName>
                </BrandContainer>
                <Instagram>
                  <Link href='https://instagram.com/gregor_mikaelson?igshid=YmMyMTA2M2Y='>
                    Instagram
                  </Link>
                </Instagram>
              </>
            )}
          </HeaderWrapper>
        </Container>
        {!desktop && <MobileMenu show={mobileMenuShown} />}
      </Header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
