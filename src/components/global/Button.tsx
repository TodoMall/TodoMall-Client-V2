import styled from '@emotion/styled';
import THEME from 'constants/Colors';
import React from 'react';

type Props = {
  primary?: boolean;
  large?: boolean;
  rounder?: boolean;
  disabled?: boolean;
  border?: boolean;
  text: string;
};

const Button = ({ primary = false, large = false, rounder = false, disabled = false, border = false, text }: Props) => {
  return (
    <Wrapper primary={primary} large={large} rounder={rounder} disabled={disabled} border={border}>
      <Text primary={primary} border={border}>
        {text}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ primary: boolean; large: boolean; rounder: boolean; disabled: boolean; border: boolean }>`
  width: ${(props) => (props.large ? 343 : 168)}px;
  height: 52px;
  background-color: ${(props) =>
    props.disabled ? THEME.GRAY200 : props.primary ? (props.border ? THEME.WHITE : THEME.PURPLE500) : THEME.WHITE};
  border-radius: ${(props) => (props.rounder ? 40 : 20)}px;
  border: 1px solid ${(props) => (props.disabled ? THEME.GRAY200 : props.primary ? THEME.PURPLE500 : THEME.GRAY200)};
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    background-color: ${(props) => (props.disabled ? THEME.GRAY200 : props.primary ? THEME.PURPLE800 : THEME.WHITE)};
    border: 1px solid ${(props) => (props.disabled ? THEME.GRAY200 : props.primary ? THEME.PURPLE800 : THEME.GRAY200)};
  }
`;

const Text = styled.p<{ primary: boolean; border: boolean }>`
  color: ${(props) => (props.primary ? (props.border ? THEME.PURPLE500 : THEME.WHITE) : THEME.GRAY500)};
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export default Button;
