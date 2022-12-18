import { css } from '@emotion/react';
import styled from '@emotion/styled';
import THEME from '@src/constants/Colors';
import WIDTHS from '@src/constants/Widths';
import React, { ButtonHTMLAttributes } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

type Variant = 'Primary' | 'Warning' | 'Bordered' | 'Cancel' | 'Disabled';

type Size = 'Small' | 'Large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Size;
  rounder: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({ children, onClick, loading, variant, size, rounder }: ButtonProps) => {
  return (
    <Container onClick={onClick} variant={variant} size={size} rounder={rounder}>
      {loading ? <MoonLoader color={THEME.PURPLE300} size={25} /> : children}
    </Container>
  );
};

const ButtonSize = (size: Size) => {
  if (size === 'Small') {
    return WIDTHS.BUTTON_SMALL;
  } else {
    return WIDTHS.BUTTON_LARGE;
  }
};

const ButtonColor = (variant: Variant) => {
  switch (variant) {
    case 'Primary':
      return THEME.PURPLE500;
    case 'Warning':
      return THEME.ERROR;
    case 'Bordered':
      return THEME.WHITE;
    case 'Cancel':
      return THEME.WHITE;
    case 'Disabled':
      return THEME.GRAY200;
  }
};

const ButtonRadius = (rounder: boolean) => {
  if (rounder) {
    return WIDTHS.BUTTON_RADIUS_LARGE;
  } else {
    return WIDTHS.BUTTON_RADIUS_SMALL;
  }
};

const ButtonStyle = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case 'Primary':
      return css`
        color: ${THEME.WHITE};
        border: 1px solid ${THEME.PURPLE500};
        background-color: ${THEME.PURPLE500};
        &:active {
          background-color: ${THEME.PURPLE700};
        }
      `;
    case 'Warning':
      return css`
        color: ${THEME.WHITE};
        border: 1px solid ${THEME.ERROR};
        background-color: ${THEME.ERROR};
      `;
    case 'Bordered':
      return css`
        color: ${THEME.PURPLE500};
        background-color: ${THEME.WHITE};
        border: 1px solid ${THEME.PURPLE500};
        &:active {
          border: 1px solid ${THEME.PURPLE700};
        }
      `;
    case 'Cancel':
      return css`
        color: ${THEME.GRAY500};
        background-color: ${THEME.WHITE};
        border: 1px solid ${THEME.GRAY200};

        &:active {
          border: 1px solid ${THEME.GRAY300};
        }
      `;
    case 'Disabled':
      return css`
        color: ${THEME.WHITE};
        background-color: ${THEME.GRAY200};
        pointer-events: none;
        user-select: none;
        border: 1px solid ${THEME.GRAY200};
      `;
  }
};

const Container = styled.button<ButtonProps>`
  width: ${({ size }) => ButtonSize(size)}rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounder }) => ButtonRadius(rounder)}rem;
  background-color: ${({ variant }) => ButtonColor(variant)}rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  /* Additional Button Style for different variants */
  ${ButtonStyle}
`;

export default Button;
