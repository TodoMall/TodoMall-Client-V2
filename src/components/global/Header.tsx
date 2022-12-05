import styled from '@emotion/styled';
import THEME from 'constants/Colors';
import { useRouter } from 'next/router';
import React from 'react';
import { BackArrowIcon } from './Icons';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const router = useRouter();

  return (
    <Wrapper>
      <BackArrow
        onClick={() => {
          router.back();
        }}>
        <BackArrowIcon />
      </BackArrow>
      <HeaderTitle>{title}</HeaderTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.BACKGROUND1};
  position: fixed;
`;

const BackArrow = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const HeaderTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export default Header;
