import styled from '@emotion/styled';
import THEME from '../../../constants/Colors';
import SPACING from '../../../constants/Spacing';
import { useRouter } from 'next/router';
import React from 'react';
import { MypageIcon, TodoBoxIcon, TodoMallIcon } from '../icons/GNBIcons';
import { PATHS } from '../../../constants/Paths';

const GNB = () => {
  const { replace, pathname } = useRouter();

  const handleClick = (path: string) => {
    replace(path);
  };

  const checkPath = (path: string) => {
    return pathname === path;
  };

  return (
    <NavBar>
      <Column
        onClick={() => {
          handleClick(PATHS.TODOBOX);
        }}>
        <TodoBoxIcon selected={checkPath(PATHS.TODOBOX)} />
        <Title active={checkPath(PATHS.TODOBOX)}>투두함</Title>
      </Column>
      <Column
        onClick={() => {
          handleClick(PATHS.TODOMALL);
        }}>
        <TodoMallIcon selected={checkPath(PATHS.TODOMALL)} />
        <Title active={checkPath(PATHS.TODOMALL)}>투두몰</Title>
      </Column>
      <Column
        onClick={() => {
          handleClick(PATHS.MYPAGE);
        }}>
        <MypageIcon selected={checkPath(PATHS.MYPAGE)} />
        <Title active={checkPath(PATHS.MYPAGE)}>내 기록</Title>
      </Column>
    </NavBar>
  );
};

const NavBar = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding-top: 0.06rem;
  padding-bottom: 2.125rem;
  margin: 0 auto;
  width: 100%;
  max-width: ${SPACING.MAXWIDTH}px;
  left: 0;
  right: 0;
  bottom: 0px;
  background-color: ${THEME.BACKGROUND1};
`;

const Column = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  height: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

const Title = styled.p<{ active: boolean }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: ${(props) => (props.active ? `${THEME.PURPLE500}` : `${THEME.GRAY400}`)};
`;

export default GNB;
