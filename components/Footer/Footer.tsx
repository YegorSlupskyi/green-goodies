import icons from '@/utils/sprite';
import Icon from '../Icon/Icon';
import {
  AllRights,
  Contacts,
  Content,
  Group,
  LogoWrapper,
  Wrapper,
} from './Footer.style';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <Icon icon={icons.logo} width={100} height={70} />
        </LogoWrapper>
        <Contacts>
          <Group>
            <p className='header'>Contacts</p>
            <p className='link'>green@goodies.com</p>
            <p className='link'>+380 666 3444 70</p>
          </Group>
          <Group>
            <p className='header'>Instagram</p>
            <p className='link'>
              <Link href='https://instagram.com/gregor_mikaelson?igshid=YmMyMTA2M2Y=' target='_blank'>
                green@goodies.com
              </Link>
            </p>
          </Group>
          <Group>
            <p className='header'>About Us</p>
            <p className='link'>
              <Link href='organization-info'>Organization info</Link>
            </p>
            <p className='link'>
              <Link href='certificates'>Certificates</Link>
            </p>
          </Group>
        </Contacts>
      </Content>
      <AllRights>© Green Goodies Confectionery All rights reserved</AllRights>
    </Wrapper>
  );
};

export default Footer;
