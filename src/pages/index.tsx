import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Button from '@src/components/global/Button';
import { GoogleLogin, KakaoLogin } from '@src/components/icons/SocialLoginIcons';
import SplashScreen from '@src/components/login/SplashScreen';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const splash = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(splash);
    };
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Container>
      <Logo alt="TodoMall" src="/assets/LoginLogo.png" width={200} height={65} />
      <LoginButtons>
        <KakaoLogin onClick={() => {}} />
        <GoogleLogin onClick={() => {}} />
        <CompanyButton onClick={() => {}}>c. myplanit</CompanyButton>
      </LoginButtons>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-image: url('/assets/LoginBackground.png');
  background-size: auto 32rem;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const Logo = styled(Image)`
  position: absolute;
  bottom: 36rem;
`;

const LoginButtons = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  gap: 1rem;
  padding-bottom: 1rem;
`;

const CompanyButton = styled.p`
  color: ${COLOR.GRAY600};
`;
