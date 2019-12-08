import React from 'react';
import styled from '@emotion/styled';
import HamburgerMenu from 'react-hamburger-menu';

interface HeaderProps {
  isMobile: boolean;
}

const HeaderWrapper = styled('div')(() => {
  return {
    flex: '1 100%'
  };
});

const MobiHeaderWrapper = styled('div')<{ isOpen: boolean}>(({ isOpen }) => {
  const display = isOpen ? 'block' : 'none';
  return {
    display
  };
});

const Header: React.FC<HeaderProps> = ({ isMobile = false }) => {
  return (
    <HeaderWrapper>
      {isMobile ? <MobileHeader/> : <FullHeader/>}
    </HeaderWrapper>
  );
}

const FullHeader: React.FC = () => {
  return (
    <div>
      full size screen header
    </div>
  );
}

const MobileHeader: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState<boolean>(false);

  const handleMenuClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  return (
    <div>
      <HamburgerMenu
        isOpen={isHamburgerOpen}
        menuClicked={handleMenuClick}
      />
      <MobiHeaderWrapper isOpen={isHamburgerOpen}>
        <div>
          one
        </div>
        <div>
          two
        </div>
      </MobiHeaderWrapper>
    </div>
  );
}

export default Header;
