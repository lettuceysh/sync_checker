import { colors } from '../colors';

const { default: styled } = require('@emotion/styled');
const { Table } = require('@mui/material');

export const StyledTableContainer = styled(Table)`
  margin-top: 5px;
  background-color: ${({ theme }) => theme.palette.white100};
  box-shadow: rgb(100 116 139 / 12%) 0px 10px 15px;
`;
export const StyledTable = styled(Table)`
  border-collapse: collapse;

  > thead {
    > tr {
      > th {
        background-color: ${({ theme }) => theme.palette.background.tHead};
        color: ${({ theme }) => theme.palette.text.tHead};
        padding: 2px 5px;
        text-align: center;
      }
    }
  }
  > tbody {
    > tr {
      > td {
        padding: 5px;
        border: 1px solid ${colors.bluegray250};
      }
    }
  }
`;
