import React, { ReactNode } from 'react';
import GNB from 'src/components/global/GNB';

type Props = {};

const todobox = (props: Props) => {
  return <div>todobox</div>;
};

todobox.getLayout = (page: ReactNode) => (
  <>
    {page}
    <GNB />
  </>
);
export default todobox;
