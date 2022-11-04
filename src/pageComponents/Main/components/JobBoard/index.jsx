import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RowItem from './RowItem';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';
import { ItemWrapper } from '../../styled';
import dayjs from 'dayjs';
import { formatDate } from '@/libs/utils/date';

const JobBoard = ({ jobs }) => {
  return (
    <ItemWrapper>
      <Typography variant="h2">Job Synchronization Board</Typography>
      <ScrollContainer>
        <StyledTableContainer>
          <StyledTable stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  project
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center" colSpan={8}>
                  JOB -Synchronization Result
                </TableCell>
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
                  <TableCell align="center">{job.project_name}</TableCell>
                  <TableCell align="center">{job.source_ds_name}</TableCell>
                  <TableCell align="center">{job.target_ds_name}</TableCell>
                  <TableCell align="center">{job.job_id}</TableCell>
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
    </ItemWrapper>
  );
};

const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 5px;
`;

export default JobBoard;
