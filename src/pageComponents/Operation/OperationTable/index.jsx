import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RowItem from './RowItem';
import { Checkbox } from '@mui/material';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import styled from '@emotion/styled';
import { formatDate } from '@/libs/utils/date';
import { useOperationStore } from '../store/useOperationStore';

const OperationManageMentTable = ({ jobs }) => {
  const { addId, deleteId } = useOperationStore();
  return (
    <ScrollContainer>
      <StyledTableContainer>
        <StyledTable stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" rowSpan={3}>
                <Checkbox />
              </TableCell>
              <TableCell align="center" colSpan={3}>
                project
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center" colSpan={8}>
                JOB -Synchronization Result
              </TableCell>
              <TableCell align="center" rowSpan={3}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">C.N.Source</TableCell>
              <TableCell align="center">C.N.Source</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Source</TableCell>
              <TableCell align="center">Target</TableCell>
              <TableCell align="center">StartTime</TableCell>
              <TableCell align="center">EndTime</TableCell>
              <TableCell align="center">RunningTime</TableCell>
              <TableCell align="center">
                Out-of-Sync
                <br />
                Status
              </TableCell>
              <TableCell align="center">
                Out-of-Sync
                <br />
                Count
              </TableCell>
              <TableCell align="center">
                Operation
                <br />
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs?.map((job, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell align="center">
                  <Checkbox />
                </TableCell>
                <TableCell align="center">{job.project_name}</TableCell>
                <TableCell align="center">{job.source_ds_name}</TableCell>
                <TableCell align="center">{job.target_ds_name}</TableCell>
                <TableCell align="center">{job.job_id}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    onChange={(value) => {
                      if (value.target.checked) {
                        addId(job.session_id);
                      } else {
                        deleteId(job.session_id);
                      }
                    }}
                  />
                </TableCell>
                <TableCell align="center">{job.source_table_name}</TableCell>
                <TableCell align="center">{job.target_table_name}</TableCell>
                <TableCell align="center">{formatDate(job.start_time)}</TableCell>
                <TableCell align="center">{formatDate(job.end_time)}</TableCell>
                <TableCell align="center">{job.running_time}</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  max-height: 700px;
  overflow-y: auto;
  margin-top: 5px;
`;

export default OperationManageMentTable;
