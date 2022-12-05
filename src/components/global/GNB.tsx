import styled from '@emotion/styled';
import THEME from 'constants/Colors';
import React from 'react';
import { Mypage, TodoBox, TodoMall } from './Icons';

type Props = {};

const GNB = (props: Props) => {
  return (
    <NavBar>
      <Column>
        <TodoBox />
        <Title active={false}>투두함</Title>
      </Column>
      <Column>
        <TodoMall selected />
        <Title active={true}>투두몰</Title>
      </Column>
      <Column>
        <Mypage />
        <Title active={false}>내 기록</Title>
      </Column>
    </NavBar>
  );
};

const NavBar = styled.footer`
  display: flex;
  align-items: center;
  height: 56px;
  padding-bottom: 34px;
  position: fixed;
  z-index: 100000;
  left: 0;
  right: 0;
  bottom: 0px;
  background-color: ${THEME.BACKGROUND1};
`;

const Column = styled.div`
  text-align: center;
  border: none;
  display: flex;
  width: 100%;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Title = styled.p<{ active: boolean }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => (props.active ? `${THEME.PURPLE500}` : `${THEME.GRAY400}`)};
`;

export default GNB;
