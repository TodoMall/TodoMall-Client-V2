import React from 'react';
import { useRecoilState } from 'recoil';
import { testState } from 'src/atoms/testAtom';

type Props = {};

const Test = (props: Props) => {
  const [test, setTest] = useRecoilState(testState);

  return <div>{test}</div>;
};

export default Test;
