import styled from '@emotion/styled';
import { TermsPersonal } from '@src/common/constants/Terms';
import Header from '@src/components/global/Header';
import React from 'react';

const Personal = () => {
  return (
    <Container>
      <Header text="개인정보 처리방침" isBack />
      <HTMLDiv dangerouslySetInnerHTML={{ __html: TermsPersonal }} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const HTMLDiv = styled.div`
  padding: 3rem 1.2rem;
`;
export default Personal;
