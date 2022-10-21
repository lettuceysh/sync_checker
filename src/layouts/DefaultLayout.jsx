import styled from '@emotion/styled';
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

const Wrapper = styled.div`
  padding: 20px;
`;

export default DefaultLayout;
