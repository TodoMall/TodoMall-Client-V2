import styled from '@emotion/styled';
import { TermsService } from '@src/common/constants/Terms';
import Header from '@src/components/global/Header';
import React from 'react';

const Service = () => {
  return (
    <Container>
      <Header text="서비스 이용약관" isBack />
      <HTMLDiv dangerouslySetInnerHTML={{ __html: TermsService }} />
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

export default Service;
