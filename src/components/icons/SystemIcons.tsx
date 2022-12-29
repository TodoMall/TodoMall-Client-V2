import COLOR from '@src/common/constants/Colors';

export const BackArrowIcon = ({ onClick, isBack }: { onClick: () => void; isBack: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path
      d="M16 4L8 12L16 20"
      stroke={isBack ? COLOR.BLACK : COLOR.BACKGROUND1}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
