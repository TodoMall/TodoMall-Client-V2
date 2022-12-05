import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import SplashLogo from 'public/assets/SplashLogo.png';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {};

const SplashScreen = (props: Props) => {
  return (
    <Wrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image alt="logo" src={SplashLogo} width={180} height={50} />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SplashScreen;
