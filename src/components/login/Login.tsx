import React from 'react';
import styled from '@emotion/styled';
import { GoogleIcon, KakaoIcon } from '../global/Icons';
import { motion } from 'framer-motion';
import SPACING from '../../../constants/Spacing';

type Props = {};

const Login = (props: Props) => {
  return (
    <Wrapper initial={{ y: 200, opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }}>
      <LoginButtons>
        <KakaoIcon />
        <GoogleIcon />
        <CompanyName>c. myplanit</CompanyName>
      </LoginButtons>
      <BackgroundImage src="/assets/LoginLogo.png" />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 40px;
`;

const LoginButtons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${SPACING.SPACING200}px;
  z-index: 1;
`;

const CompanyName = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin-top: ${SPACING.SPACING200}px;
`;

const BackgroundImage = styled.img`
  position: fixed;
  bottom: 0px;
  width: 110%;
  max-width: 450px;
  z-index: 0;
  overflow: hidden;
`;

export default Login;
