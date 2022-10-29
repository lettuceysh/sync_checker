import styled from '@emotion/styled';
import { colors } from '../colors';

export const FormWrapper = styled.div`
  margin-top: 20px;
  padding: 5px 10px 10px 10px;
  background-color: ${colors.gray900};
  border-radius: 2px;
`;

export const AddFormArea = styled.section`
  padding: 15px;
  background-color: white;
  border-radius: 2px;
  .MuiFormLabel-asterisk {
    color: ${colors.red100};
  }
`;

export const FormTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: white;
  padding-bottom: 5px;
  padding-left: 2px;
`;
