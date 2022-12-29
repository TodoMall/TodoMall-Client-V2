import { useRouter } from 'next/router';
import React from 'react';

const auth = () => {
  const { query } = useRouter();

  return <div>{query.code}</div>;
};

export default auth;
