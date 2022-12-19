import styled from '@emotion/styled';
import Button from '@src/components/global/Button';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Wrapper>
      <Button
        variant="Primary"
        size="Large"
        rounder={false}
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        제출하기
      </Button>
      <Button
        variant="Bordered"
        size="Small"
        rounder={true}
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        모범예시 보러가기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
