import { colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const CircleChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2px;
  width: 100%;
  height: 120px;
  > div {
    min-width: 100px;
  }
`;

export const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  box-shadow: rgb(100 116 139 / 10%) 0px 10px 15px;
  border-radius: 6px;
  width: 100%;

  padding: 10px;

  h2 {
    color: ${colors.gray900};
    font-weight: normal;
    text-align: center;
    font-size: 18px;
    padding: 10px 0 15px 0;
  }
`;
