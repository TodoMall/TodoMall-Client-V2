import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { BackArrowIcon } from '../icons/SystemIcons';

export interface HeaderProps {
  isBack?: boolean;
  text: string;
}

const Header = ({ isBack = false, text }: HeaderProps) => {
  const { back } = useRouter();

  return (
    <Container>
      <BackArrowIcon onClick={back} isBack />
      <Title>{text}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const Title = styled.p`
  flex-grow: 1;
  width: 100%;
  text-align: center;
  margin-right: 2.5rem;
  font-size: 16px;
  line-height: 24px;
`;

export default Header;
