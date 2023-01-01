import { selector } from 'recoil';
import { AgreementState } from '../atoms/AgreementAtom';

export const isFinishedAgreementState = selector({
  key: 'isFinishedAgreement',
  get: ({ get }) => {
    const agreement = get(AgreementState);

    const isFinishedAgreement = agreement.personal === true && agreement.service === true;

    return {
      isFinishedAgreement,
    };
  },
});
