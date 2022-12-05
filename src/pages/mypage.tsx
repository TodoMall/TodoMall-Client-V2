import React, { ReactNode } from 'react';
import GNB from 'src/components/global/GNB';
import Header from 'src/components/global/Header';

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
