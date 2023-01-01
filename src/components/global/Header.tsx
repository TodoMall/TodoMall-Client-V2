import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
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
      <ButtonWrapper>
        <BackArrowIcon onClick={back} isBack={isBack} />
      </ButtonWrapper>
      <Title>{text}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR.BACKGROUND1};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 1rem;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export default Header;
