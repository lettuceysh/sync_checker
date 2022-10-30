import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ItemWrapper } from '../../styled';
import dayjs from 'dayjs';

const Summarization = ({ jobStatus }) => {
  const [list, setList] = useState();

  useEffect(() => {
    if (jobStatus) {
      setList(jobStatus.filter((status) => status.outofsync_count && status.outofsync_count !== 0));
    }
  }, [jobStatus]);

  return (
    <ItemWrapper>
      <Typography variant="h2">Out-of-Sync Summarization</Typography>
      <List>
        {list?.map((item, index) => (
          <li key={index}>
            <button>
              <Typography variant="normalGray">
                <strong>불일치 발생</strong>
                {`${item.job_id} [${item.source_table_name} -> ${item.target_table_name}]에 ${dayjs(
                  item.start_time
                ).format('YYYY-MM-DD HH-MM-ss')} ${item.outofsync_count}건 불일치 발생`}
              </Typography>
            </button>
          </li>
        ))}
      </List>
    </ItemWrapper>
  );
};

const List = styled.ul`
  background-color: ${({ theme }) => theme.palette.white100};

  border-radius: 2px;
  margin-top: 10px;
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
