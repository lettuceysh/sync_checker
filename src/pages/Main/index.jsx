import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  return (
    <Wrapper>
      <Link to="/login">main</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${({ theme: { colors } }) => colors.gray900};
`;

export default Main;
