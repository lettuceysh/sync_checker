import Alert from '@/components/Alert';
import styled from '@emotion/styled';
import Footer from './Footer';
import Gnb from './Gnb';

const DefaultLayout = ({ children, footerColor }) => {
  return (
    <Wrapper>
      <Gnb />
      <Content>{children}</Content>
      <Footer footerColor={footerColor} />
      <Alert />
    </Wrapper>
  );
};

const Content = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export default DefaultLayout;
