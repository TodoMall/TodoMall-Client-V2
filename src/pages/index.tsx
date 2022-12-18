import styled from '@emotion/styled';
import Button from '@src/components/global/Buttons';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper>
      <Button
        variant="Primary"
        size="Large"
        rounder={false}
        loading={loading}
        onClick={() => {
          setLoading(!loading);
        }}
      >
        제출하기
      </Button>
      <Button
        variant="Bordered"
        size="Small"
        rounder={true}
        loading={loading}
        onClick={() => {
          setLoading(!loading);
        }}
      >
        모범예시 보러가기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
