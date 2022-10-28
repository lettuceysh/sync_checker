import styled from '@emotion/styled';

export const SubPageWrapper = styled.div`
  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: end;
  > button + button {
    margin-left: 10px;
  }
`;
