import React from 'react';
import styled from '@emotion/styled';
import GNB from './GNB';
import SPACING from '../../../constants/Spacing';

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: #d2c6ff;
`;

const Container = styled.div`
  position: relative;
  max-width: ${SPACING.MAXWIDTH}px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0 auto;
  background: #fbfbfb;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default Layout;
