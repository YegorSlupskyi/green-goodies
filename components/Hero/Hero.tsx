import { useDeviceType } from '@/hooks/useWindowSize';
import icons from '@/utils/sprite';
import Icon from '../Icon';
import {
  HeroImage,
  HeroContainer,
  Wrapper,
  HeroTextBlock,
  HeroHeader,
  HeroSubheader,
  Logo,
} from './Hero.style';

const Hero = () => {
  const { mobile, tablet } = useDeviceType();
  return (
    <Wrapper>
      {mobile ? (
        <>
          <HeroContainer>
            <HeroImage>
              <Logo>
                <Icon icon={icons.logo} width={250} height={175} />
              </Logo>
            </HeroImage>
          </HeroContainer>
          <HeroTextBlock>
            <HeroHeader>Green Goodies</HeroHeader>
            <HeroSubheader>Fulfills your sweet desires</HeroSubheader>
          </HeroTextBlock>
        </>
      ) : (
        <>
          <HeroImage />
          <Logo>
            <Icon
              icon={icons.logo}
              width={tablet ? 330 : 500}
              height={tablet ? 230 : 350}
            />
          </Logo>
          <HeroContainer>
            <HeroTextBlock>
              <HeroHeader>Green Goodies</HeroHeader>
              <HeroSubheader>Fulfills your sweet desires</HeroSubheader>
            </HeroTextBlock>
          </HeroContainer>
        </>
      )}
    </Wrapper>
  );
};

export default Hero;
