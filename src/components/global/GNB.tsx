import styled from '@emotion/styled';
import THEME from '@src/constants/Colors';
import { PATHS } from '@src/constants/Paths';
import { useRouter } from 'next/router';
import React from 'react';
import { MypageIcon, TodoBoxIcon, TodoMallIcon } from '../icons/GNBIcons';

const GNB = () => {
  const { replace, pathname } = useRouter();

  const handleClick = (path: string) => {
    replace(path);
  };

  const checkActive = (path: string) => {
    return pathname === path;
  };

  return (
    <Container>
      <Column
        onClick={() => {
          handleClick(PATHS.TODOBOX);
        }}
      >
        <TodoBoxIcon selected={checkActive(PATHS.TODOBOX)} />
        <ColumnTitle active={checkActive(PATHS.TODOBOX)}>투두함</ColumnTitle>
      </Column>
      <Column
        onClick={() => {
          handleClick(PATHS.TODOMALL);
        }}
      >
        <TodoMallIcon selected={checkActive(PATHS.TODOMALL)} />
        <ColumnTitle active={checkActive(PATHS.TODOMALL)}>투두몰</ColumnTitle>
      </Column>
      <Column
        onClick={() => {
          handleClick(PATHS.MYPAGE);
        }}
      >
        <MypageIcon selected={checkActive(PATHS.MYPAGE)} />
        <ColumnTitle active={checkActive(PATHS.MYPAGE)}>내 기록</ColumnTitle>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  height: 3.5rem;
  width: 100%;
  bottom: 0;
  padding-bottom: 2.125rem;
  display: flex;
  align-items: center;
  background-color: ${THEME.BACKGROUND1};
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ColumnTitle = styled.p<{ active: boolean }>`
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: ${(props) => (props.active ? `${THEME.PURPLE500}` : `${THEME.GRAY400}`)};
  margin: 0.25rem 0;
`;

export default GNB;
