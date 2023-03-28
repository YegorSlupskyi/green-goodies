import { BlockHead, MenuBlock, MobileMenuWrapper, BlockText } from './MobileMenu.style';

export interface MobileMenuProps {
  show: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ show }) => {
  return (
    <MobileMenuWrapper className={!show && 'hidden'}>
      <MenuBlock>
        <BlockHead>Instagram</BlockHead>
        <BlockText>@green_goodies</BlockText>
      </MenuBlock>
      <MenuBlock>
        <BlockHead>Contacts</BlockHead>
        <BlockText>green@goodies.com</BlockText>
        <BlockText>+380 666 3444 70</BlockText>
      </MenuBlock>
      <MenuBlock>
        <BlockHead>About us</BlockHead>
        <BlockText>Organization info</BlockText>
        <BlockText>Certificates</BlockText>
      </MenuBlock>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
