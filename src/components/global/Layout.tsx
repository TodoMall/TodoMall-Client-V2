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
  position: fixed;
  width: 100%;
  height: 100%;
  background: #d2c6ff;
`;

const Container = styled.div`
  position: relative;
  width: min(100%, 59.375rem);
  height: 100%;
  margin: 0 auto;
  background: #fbfbfb;
`;

export default Layout;
