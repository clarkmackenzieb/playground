import React from 'react';
import styled from '@emotion/styled';

const ContentWrapper = styled('div')(() => {
  return {
    flex: 2,
  };
});

const Content: React.FC = () => {
  return (
    <ContentWrapper>
      content
    </ContentWrapper>
  );
}

export default Content;
