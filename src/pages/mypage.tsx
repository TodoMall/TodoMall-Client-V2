import React, { ReactNode } from 'react';
import GNB from 'src/components/global/GNB';

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
