import styled from '@emotion/styled';
import { useEffect } from 'react';
import Footer from './Footer';
import Gnb from './Gnb';

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Gnb />
      {children}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DefaultLayout;