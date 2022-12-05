import React, { ReactNode } from 'react';
import Button from '../components/global/Button';
import GNB from '../components/global/GNB';

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
