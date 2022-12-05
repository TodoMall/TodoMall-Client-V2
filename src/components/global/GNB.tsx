import styled from '@emotion/styled';
import THEME from 'constants/Colors';
import { useRouter } from 'next/router';
import React from 'react';
import { Mypage, TodoBox, TodoMall } from './Icons';

type Props = {};

const GNB = (props: Props) => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <NavBar>
      <Column
        onClick={() => {
          handleClick('/todobox');
        }}>
        <TodoBox selected={router.asPath === '/todobox'} />
        <Title active={router.asPath === '/todobox'}>투두함</Title>
      </Column>
      <Column
        onClick={() => {
          handleClick('/todomall');
        }}>
        <TodoMall selected={router.asPath === '/todomall'} />
        <Title active={router.asPath === '/todomall'}>투두몰</Title>
      </Column>
      <Column
        onClick={() => {
          handleClick('/mypage');
        }}>
        <Mypage selected={router.asPath === '/mypage'} />
        <Title active={router.asPath === '/mypage'}>내 기록</Title>
      </Column>
    </NavBar>
  );
};

const NavBar = styled.footer`
  display: flex;
  align-items: center;
  height: 56px;
  padding-top: 1px;
  padding-bottom: 34px;
  margin: 0 20px;
  position: fixed;
  z-index: 10;
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
