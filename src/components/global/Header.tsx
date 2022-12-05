import styled from '@emotion/styled';
import THEME from 'constants/Colors';
import SPACING from 'constants/Spacing';
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
  position: fixed;
  width: 100%;
  max-width: ${SPACING.MAXWIDTH}px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.BACKGROUND1};
`;

const BackArrow = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
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
