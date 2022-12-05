import React, { ReactNode } from 'react';
import Header from 'src/components/global/Header';

type Props = {};

const Signup = (props: Props) => {
  return <div>Signup</div>;
};

Signup.getLayout = (page: ReactNode) => (
  <>
    <Header title="회원 가입" />
    {page}
  </>
);

export default Signup;
