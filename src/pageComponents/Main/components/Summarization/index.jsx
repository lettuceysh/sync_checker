import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { ItemWrapper } from '../../styled';

const Summarization = () => {
  return (
    <ItemWrapper>
      <Typography variant="h2">Out-of-Sync Summarization</Typography>
      <List>
        <li>
          <button>
            <Typography variant="normalGray">
              <strong>불일치 발생</strong>
              JOB_Name (Source Table Target Table) 에 2022-07-02 10:10:10 10건
            </Typography>
          </button>
        </li>
        <li>
          <button>
            <Typography variant="normalGray">
              <strong>불일치 발생</strong>
              JOB_Name (Source Table Target Table) 에 2022-07-02 10:10:10 10건
            </Typography>
          </button>
        </li>
        <li>
          <button>
            <Typography variant="normalGray">
              <strong>불일치 발생</strong>
              JOB_Name (Source Table Target Table) 에 2022-07-02 10:10:10 10건
            </Typography>
          </button>
        </li>
        <li>
          <button>
            <Typography variant="normalGray">
              <strong>불일치 발생</strong>
              JOB_Name (Source Table Target Table) 에 2022-07-02 10:10:10 10건
            </Typography>
          </button>
        </li>
        <li>
          <button>
            <Typography variant="normalGray">
              <strong>불일치 발생</strong>
              JOB_Name (Source Table Target Table) 에 2022-07-02 10:10:10 10건
            </Typography>
          </button>
        </li>
        <li>
          <button>
            <Typography variant="normalGray">
              <strong>불일치 발생</strong>
              JOB_Name (Source Table Target Table) 에 2022-07-02 10:10:10 10건
            </Typography>
          </button>
        </li>
      </List>
    </ItemWrapper>
  );
};

const List = styled.ul`
  background-color: ${({ theme }) => theme.palette.white100};

  border-radius: 2px;
  margin-top: 5px;
  padding-left: 10px;
  height: 120px;
  overflow-y: auto;

  > li {
    padding: 5px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray200};
  }

  strong {
    color: ${colors.red100};
    margin-right: 10px;
    font-size: 12px;
    text-decoration: underline;
  }
`;
export default Summarization;
