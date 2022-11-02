import Alert from '@/components/Alert';
import styled from '@emotion/styled';
import Footer from './Footer';
import Gnb from './Gnb';
import Lnb from './Lnb';

const SubLayout = ({ children, footerColor }) => {
  return (
    <Wrapper>
      <SubWrapper>
        <Lnb />
        <MiddleWrapper>
          <Gnb isMain={false} />
          <Content>{children}</Content>
        </MiddleWrapper>
      </SubWrapper>

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

const SubWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MiddleWrapper = styled.div`
  flex: 1;
`;

export default SubLayout;
