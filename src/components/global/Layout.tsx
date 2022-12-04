import React from 'react';
import styled from '@emotion/styled';
import GNB from './GNB';

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <Wrapper>
      <Container>
        {children}
        <GNB />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: #d2c6ff;
`;

const Container = styled.div`
  max-width: 950px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fbfbfb;
  color: #fff;
  position: relative;
  backdrop-filter: blur(10px);
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default Layout;
