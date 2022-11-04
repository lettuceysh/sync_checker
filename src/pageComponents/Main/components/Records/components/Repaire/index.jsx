import { useForm } from 'react-hook-form';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import styled from '@emotion/styled';

import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import { AddFormArea, Buttons, FormTitle, FormWrapper } from '@/styles/components/AddFormArea';
import { useEffect, useMemo } from 'react';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { baseProps } from '@/components/customMui/common';
import { initAllValueInObject } from '@/libs/utils/array';
import MuiSelect from '@/components/customMui/MuiSelect';
import { StyledTable, StyledTableContainer } from '@/styles/components/StyledTable';

const Reaire = ({ onClose }) => {
  const { alert } = useAlertStore();

  const confirm = () => {
    alert({
      content: '정상 처리 되었습니다.',
      okText: 'ok',
      onOk: () => {
        onClose();
      }
    });
  };

  return (
    <Dialog open={true} PaperProps={{ sx: { width: 900 } }} fullWidth="true" maxWidth="xl">
      <Wrapper>
        <ScrollContainer>
          <StyledTableContainer>
            <StyledTable stickyHeader>
              <colgroup>
                <col width="20px" />
                <col width="auto" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell align="center">NO</TableCell>
                  <TableCell align="center">Repair Out-of-Sync Data DML</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell>
                    Insert into OGGTEST.TEST (id , name, addr ) values ( ‘parkjm’,’parkjm’,’seoul ‘)
                    ;
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">2</TableCell>
                  <TableCell>
                    Insert into OGGTEST.TEST (id , name, addr ) values ( ‘parkjm’,’parkjm’,’seoul ‘)
                    ;
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">3</TableCell>
                  <TableCell>
                    Insert into OGGTEST.TEST (id , name, addr ) values ( ‘parkjm’,’parkjm’,’seoul ‘)
                    ;
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">4</TableCell>
                  <TableCell>
                    Insert into OGGTEST.TEST (id , name, addr ) values ( ‘parkjm’,’parkjm’,’seoul ‘)
                    ;
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">5</TableCell>
                  <TableCell>
                    Insert into OGGTEST.TEST (id , name, addr ) values ( ‘parkjm’,’parkjm’,’seoul ‘)
                    ;
                  </TableCell>
                </TableRow>
              </TableBody>
            </StyledTable>
          </StyledTableContainer>
        </ScrollContainer>
        <Buttons>
          <ButtonNormalFill className="blue" type="submit" onClick={confirm}>
            Confirm
          </ButtonNormalFill>
          <ButtonNormal className="blue" onClick={onClose}>
            Cancel
          </ButtonNormal>
        </Buttons>
      </Wrapper>
    </Dialog>
  );
};

const ScrollContainer = styled.div`
  height: 100px;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  padding: 10px;
`;

export default Reaire;
