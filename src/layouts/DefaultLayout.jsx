import Alert from '@/components/Alert';
import styled from '@emotion/styled';
import Footer from './Footer';
import Gnb from './Gnb';

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Gnb />
      {children}
      <Footer />
      <Alert />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DefaultLayout;
