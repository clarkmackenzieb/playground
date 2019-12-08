import React from 'react';
import styled from '@emotion/styled';
import { Header, Content, Footer } from './components';

const MAX_PHONE_WIDTH = 460;

const AppContainer = styled('div')((() => {
  return {
    display: 'flex',
    flexDirection: 'column'
  };
}));

const App: React.FC = () => {
  const isMobile = window.innerWidth < MAX_PHONE_WIDTH;
  return (
    <AppContainer>
      <Header
        isMobile={isMobile}
      />
      <Content/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
