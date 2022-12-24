import styled from '@emotion/styled';
import React from 'react';
import THEME from '../../common/constants/Colors';
import GNB from './GNB';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      {children}
      <GNB />
    </Container>
  );
};

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
