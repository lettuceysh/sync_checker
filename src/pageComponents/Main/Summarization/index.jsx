import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Summarization = () => {
  return (
    <Wrapper>
      <Typography variant="h2">Out-of-Sync Summarization</Typography>
      <List>
        <li>
          <button>
            JOB_Name( Source Table  Target Table )에 2022-07-02 10:10:10 10건 불일치 발생
          </button>
        </li>
        <li>
          <button>
            JOB_Name( Source Table  Target Table )에 2022-07-02 10:10:10 10건 불일치 발생
          </button>
        </li>
        <li>
          <button>
            JOB_Name( Source Table  Target Table )에 2022-07-02 10:10:10 10건 불일치 발생
          </button>
        </li>
        <li>
          <button>
            JOB_Name( Source Table  Target Table )에 2022-07-02 10:10:10 10건 불일치 발생
          </button>
        </li>
        <li>
          <button>
            JOB_Name( Source Table  Target Table )에 2022-07-02 10:10:10 10건 불일치 발생
          </button>
        </li>
        <li>
          <button>
            JOB_Name( Source Table  Target Table )에 2022-07-02 10:10:10 10건 불일치 발생
          </button>
        </li>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
`;

const List = styled.ul`
  border: 1px solid ${({ theme }) => theme.palette.border.primary};
  background-color: ${({ theme }) => theme.palette.background.primary};

  padding-left: 10px;
  height: 100px;
  overflow-y: auto;
  > li {
    padding: 5px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border.primary};
  }
`;
export default Summarization;
