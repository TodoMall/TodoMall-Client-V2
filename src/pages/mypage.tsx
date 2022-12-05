import React, { ReactNode } from 'react';
import GNB from '../components/global/GNB';
import Header from '../components/global/Header';

type Props = {};

const mypage = (props: Props) => {
  return <div>mypage</div>;
};

mypage.getLayout = (page: ReactNode) => (
  <>
    {page}
    <GNB />
  </>
);

export default mypage;
