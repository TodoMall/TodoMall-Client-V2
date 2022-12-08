import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background: #d2c6ff;
`;

const Container = styled.div`
  position: relative;
  width: min(100%, 59.375rem);
  margin-inline: auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0 auto;
  background: #fbfbfb;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default Layout;
