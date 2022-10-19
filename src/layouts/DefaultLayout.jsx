import styled from '@emotion/styled';
import Gnb from './Gnb';

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Gnb />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default DefaultLayout;
