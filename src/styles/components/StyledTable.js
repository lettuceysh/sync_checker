const { default: styled } = require('@emotion/styled');
const { Table } = require('@mui/material');

export const StyledTable = styled(Table)`
  margin-top: 5px;
  > thead {
    > tr {
      > th {
        background-color: ${({ theme }) => theme.palette.background.tHead};
        color: ${({ theme }) => theme.palette.text.tHead};
      }
    }
  }
`;
