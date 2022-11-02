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
          <Footer footerColor={footerColor} />
        </MiddleWrapper>
      </SubWrapper>
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
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export default SubLayout;
