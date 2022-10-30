import styled from '@emotion/styled';
import { colors } from '../colors';

export const FormWrapper = styled.div`
  padding: 0;
  border-radius: 2px;
`;

export const AddFormArea = styled.section`
  padding: 15px;
  .MuiFormLabel-asterisk {
    color: ${colors.red100};
  }

  .MuiFormLabel-root {
    color: ${colors.gray600};
  }
`;

export const FormTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.white100};
  background-color: ${colors.gray800};
  padding: 15px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  > button {
    flex: 1;
    max-width: 150px;
  }
`;

export const FormTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemWithLabel = styled.div`
  display: flex;
  > label {
    display: inline-block;
    font-size: 14px;
    color: ${colors.gray800};
    margin-right: 10px;
  }
`;
