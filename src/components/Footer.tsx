import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled('div')(() => {
  return {
    flex: '1 100%'
  };
});

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      footer
    </FooterWrapper>
  );
}

export default Footer;
