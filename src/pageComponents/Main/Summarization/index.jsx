import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Summarization = () => {
  return (
    <Wrapper>
      <Typography>Out-of-Sync Summarization</Typography>
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
  border: 1px solid blue;
  padding-left: 10px;
  height: 100px;
  overflow-y: auto;
`;

const List = styled.ul`
  > li {
    padding: 5px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.colors.blue400};
  }
`;
export default Summarization;
