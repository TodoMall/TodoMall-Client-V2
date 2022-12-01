import { atom } from 'recoil';

export const testState = atom({
  key: 'test',
  default: 'This is Test',
});
