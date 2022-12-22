import { css } from '@emotion/react';
import styled from '@emotion/styled';
import THEME from '@src/common/constants/Colors';
import WIDTHS from '@src/common/constants/Widths';
import { Size, Variant } from '@src/common/types/Button.type';
import React, { ButtonHTMLAttributes } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Size;
  rounder: boolean;
  isLoading?: boolean;
}

const Button = ({ children, onClick, isLoading, variant, size, rounder }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size} rounder={rounder}>
      {/* FIXME: Change loader component when design is fixed */}
      {isLoading ? <MoonLoader color={THEME.PURPLE300} size={25} /> : children}
    </StyledButton>
  );
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
    default:
      const errorCheck: never = variant;
  }
};

const ButtonRadius = (rounder: boolean) => {
  if (rounder) {
    return WIDTHS.BUTTON_RADIUS_LARGE;
  }

  return WIDTHS.BUTTON_RADIUS_SMALL;
};

const ButtonStyle = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case 'Primary':
      return css`
        color: ${THEME.WHITE};
        border: 1px solid ${THEME.PURPLE500};
        &:active {
          background-color: ${THEME.PURPLE700};
        }
      `;
    case 'Warning':
      return css`
        color: ${THEME.WHITE};
        border: 1px solid ${THEME.ERROR};
      `;
    case 'Bordered':
      return css`
        color: ${THEME.PURPLE500};
        border: 1px solid ${THEME.PURPLE500};
        &:active {
          border: 1px solid ${THEME.PURPLE700};
        }
      `;
    case 'Cancel':
      return css`
        color: ${THEME.GRAY500};
        border: 1px solid ${THEME.GRAY200};
        &:active {
          border: 1px solid ${THEME.GRAY300};
        }
      `;
    case 'Disabled':
      return css`
        color: ${THEME.WHITE};
        pointer-events: none;
        user-select: none;
        border: 1px solid ${THEME.GRAY200};
      `;
    default:
      const errorCheck: never = variant;
  }
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ size }) => (size === 'Small' ? WIDTHS.BUTTON_SMALL : WIDTHS.BUTTON_LARGE)}rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounder }) => ButtonRadius(rounder)}rem;
  background-color: ${({ variant }) => ButtonColor(variant)};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  /* Additional Button Style for different variants */
  ${ButtonStyle}
`;

export default Button;
