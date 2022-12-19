import styled from '@emotion/styled';
import React from 'react';
import THEME from '../../constants/Colors';
import GNB from './GNB';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Background>
      <Container>
        {children}
        <GNB />
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${THEME.PURPLE50};
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: auto;
  max-width: 900px;
  background: ${THEME.BACKGROUND1};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Layout;
