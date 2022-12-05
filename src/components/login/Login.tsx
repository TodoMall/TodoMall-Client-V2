import React from 'react';
import styled from '@emotion/styled';
import { GoogleIcon, KakaoIcon } from '../global/Icons';
import { motion } from 'framer-motion';

type Props = {};

const Login = (props: Props) => {
  return (
    <Wrapper initial={{ y: 250, opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 40 }}>
      <LoginButtons>
        <KakaoIcon />
        <GoogleIcon />
      </LoginButtons>
      <BackgroundImage src="/assets/LoginLogo.png" />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 93vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const BackgroundImage = styled.img`
  position: fixed;
  bottom: -100px;
  width: 110%;
  max-width: 450px;
  z-index: -1;
`;

export default Login;
