import { testCall } from '@/api';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Footer from './Footer';
import Gnb from './Gnb';

const DefaultLayout = ({ children }) => {
  useEffect(() => {
    testCall().then((data) => {
      console.log('success', data);
    });
  }, []);
  return (
    <Wrapper>
      <Gnb />
      {children}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export default DefaultLayout;
