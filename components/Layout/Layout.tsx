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
                    <Icon icon={icons.logo} width={100} height={70} />
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
        <MobileMenu show={mobileMenuShown} />
      </Header>
      {children}
    </>
  );
};

export default Layout;
