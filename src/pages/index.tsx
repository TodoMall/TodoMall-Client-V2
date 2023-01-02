import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import SOCIAL from '@src/common/constants/Social';
import { GoogleLogin, KakaoLogin } from '@src/components/icons/SocialLoginIcons';
import SplashScreen from '@src/components/login/SplashScreen';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();

  const handleLogin = (path: string) => {
    push(path);
  };

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
    <Container initial={{ y: 200, opacity: 0 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0 }}>
      <Logo alt="TodoMall" src="/assets/LoginLogo.png" width={200} height={60} />
      <LoginButtons>
        <KakaoLogin
          onClick={() => {
            handleLogin(SOCIAL.KAKAO_PATH);
          }}
        />
        <GoogleLogin
          onClick={() => {
            push('signup');
          }}
        />
        <CompanyButton onClick={() => {}}>c. myplanit</CompanyButton>
      </LoginButtons>
    </Container>
  );
}

const Container = styled(motion.div)`
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
