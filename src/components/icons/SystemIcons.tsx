import COLOR from '@src/common/constants/Colors';

export const BackArrowIcon = ({ onClick, isBack }: { onClick: () => void; isBack: boolean }) => (
  <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 7L9 12L14 17"
      stroke={isBack ? COLOR.BLACK : COLOR.BACKGROUND50}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const CheckBoxIcon = ({ onClick, isActive }: { onClick: () => void; isActive: boolean }) => {
  if (isActive) {
    return (
      <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill={COLOR.PURPLE50} />
        <path
          d="M6.85718 11.9999L10.2857 15.4284L17.1429 8.57129"
          stroke={COLOR.PURPLE500}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill={COLOR.GRAY50} />
      <path
        d="M6.85718 11.9999L10.2857 15.4284L17.1429 8.57129"
        stroke={COLOR.GRAY200}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const DetailIcon = ({ onClick }: { onClick: () => void }) => (
  <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17L15 12L10 7" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
