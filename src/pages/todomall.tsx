import React, { ReactNode } from 'react';
import Button from 'src/components/global/Button';
import GNB from 'src/components/global/GNB';

type Props = {};

const todomall = (props: Props) => {
  return <div>todomall</div>;
};

todomall.getLayout = (page: ReactNode) => (
  <>
    {page}
    <GNB />
  </>
);

export default todomall;
