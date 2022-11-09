import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { formatDate } from '@/libs/utils/date';
import RowItem from './RowItem';
import { Button, Checkbox, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import { ItemWrapper } from '../../styled';
import { colors } from '@/styles/colors';
import Reaire from './components/Repaire';
import { useState } from 'react';
import { useMainStore } from '../../store/useMainStore';
import { useSearchOOSRecordsBySessionID } from '@/api/querys/jobManagementQuery';
import { getHeaderList } from './helper';
import { useChecked } from '@/hooks/useChecked';
import { cancelOOSPairs, reCompareOOSPairs } from '@/api/jobManagement';
import { useAlertStore } from '@/store';

const Records = () => {
  const [isRepare, setIsRepare] = useState(false);
  const { selectedJob = {} } = useMainStore();
  const { alert } = useAlertStore();
  const { data: oosRecords } = useSearchOOSRecordsBySessionID({
    session_id: selectedJob?.session_id
  });

  const heads = getHeaderList(oosRecords);
  const { ids, addId, removeId } = useChecked();

  const clickCancel = async () => {
    try {
      await cancelOOSPairs({ recordIds: ids });
      alert({ content: '성공' });
    } catch (e) {
      alert({ content: '실패' });
    }
  };

  const clickReCompare = async () => {
    try {
      await reCompareOOSPairs({ session_id: selectedJob?.session_id });
      alert({ content: '성공' });
    } catch (e) {
      alert({ content: '실패' });
    }
  };
  return (
    <ItemWrapper>
      <Top>
        <Info>
          [{' '}
          <span>{`${selectedJob?.project_name} TASK[${selectedJob?.source_table_name} ${
            selectedJob?.target_table_name
          }] DATE[${formatDate(selectedJob?.start_time)}`}</span>{' '}
          ]
        </Info>
        <Typography variant="h2">Out of Sync. Records</Typography>

        <Buttons>
          <CustomButtonType2 onClick={clickCancel}>
            <strong>Cancel</strong>
            <br />
            Compare paris
          </CustomButtonType2>
          <CustomButton onClick={() => setIsRepare(true)}>
            <strong>Repair</strong>
            <br />
            Out-of-Sync Dat
          </CustomButton>
          <CustomButtonType3 onClick={clickReCompare}>
            <strong>Re-compare</strong>
            <br />
            Out-of-Sync Data
          </CustomButtonType3>
        </Buttons>
      </Top>

      <ScrollContainer>
        <StyledTableContainer>
          <StyledTable stickyHeader>
            <colgroup>
              <col width="30px" />
              <col width="30px" />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell align="center">Out-of-Sync ID</TableCell>
                <TableCell align="center">Position</TableCell>
                {heads?.map((head, index) => (
                  <TableCell align="center" key={index}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {oosRecords?.map((record, index) => (
                <>
                  <TableRow hover role="checkbox" key={`source${index}`}>
                    <TableCell align="center" rowSpan={2}>
                      <Checkbox
                        onChange={(value) => {
                          if (value.target.checked) {
                            addId(record.id);
                          } else {
                            removeId(record.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell align="center" rowSpan={2}>
                      {record.id}
                    </TableCell>
                    <TableCell align="center">Source</TableCell>
                    {heads?.map((head, index) => (
                      <TableCell align="center" key={index}>
                        {record.source[head]}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow hover role="checkbox" key={`target${index}`}>
                    <TableCell align="center">Target</TableCell>
                    {heads?.map((head, index) => (
                      <TableCell align="center" key={index}>
                        {record.target[head]}
                      </TableCell>
                    ))}
                  </TableRow>
                </>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </ScrollContainer>
      {isRepare && <Reaire onClose={() => setIsRepare(false)} />}
    </ItemWrapper>
  );
};

const ScrollContainer = styled.div`
  height: 200px;
  overflow-y: auto;
  margin-top: 5px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${colors.gray900};

  > span {
    font-size: 13px;
    color: ${colors.green100};
  }
`;

const Buttons = styled.div`
  display: flex;
`;
const CustomButton = styled(Button)`
  display: block;
  line-height: normal;
  &&& {
    font-size: 10px;
  }
  padding: 2px 15px;
  & + button {
    margin-left: 10px;
  }
  > strong {
    font-size: 12px;
    text-transform: none;
  }
`;

const CustomButtonType2 = styled(CustomButton)`
  border: 1px solid ${({ theme }) => theme.palette.red100};
  color: ${({ theme }) => theme.palette.red100};
`;

const CustomButtonType3 = styled(CustomButton)`
  border: 1px solid ${({ theme }) => theme.palette.blue100};
  color: ${({ theme }) => theme.palette.blue100};
`;
export default Records;
