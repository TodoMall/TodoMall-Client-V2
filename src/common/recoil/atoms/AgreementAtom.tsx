import { atom } from 'recoil';

export const AgreementState = atom({
  key: 'Agreement',
  default: {
    personal: false,
    service: false,
  },
});
