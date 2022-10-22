import styled from '@emotion/styled';

export const CircleChartWrapper = styled.div`
  display: flex;

  border: 1px solid ${({ theme }) => theme.palette.border.primary};
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-radius: 2px;
  width: 100%;
  height: 120px;
  > div {
    min-width: 100px;
  }
`;
