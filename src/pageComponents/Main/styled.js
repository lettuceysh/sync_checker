import { colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  box-shadow: rgb(100 116 139 / 10%) 0px 10px 15px;
  border-radius: 6px;
  width: 100%;

  padding: 5px;

  h2 {
    color: ${colors.gray900};
    font-weight: normal;
    font-size: 16px;
    padding: 0;
    text-align: center;
    padding-left: 5px;
    text-decoration: underline;
  }
`;
