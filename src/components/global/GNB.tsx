import styled from '@emotion/styled';
import React from 'react';

type Props = {};

const GNB = (props: Props) => {
  return (
    <NavBar>
      <Column active={false}>1</Column>
      <Column active={true}>2</Column>
      <Column active={false}>3</Column>
    </NavBar>
  );
};

const NavBar = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 5rem;
  position: fixed;
  z-index: 100000;
  left: 0;
  right: 0;
  bottom: 0px;
  background-color: #fbfbfb;
`;

const Column = styled.div<{ active: boolean }>`
  text-align: center;
  border: none;
  background: ${(props) => (props.active ? '#d2c6ff' : '#fbfbfb')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: ${(props) => (props.active ? '#d2c6ff' : '#fbfbfb')};
`;

export default GNB;
