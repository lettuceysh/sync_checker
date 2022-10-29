import { ButtonNormal } from '@/components/Buttons';
import styled from '@emotion/styled';
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

const RefreshTime = ({ onClose, open }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Screen Refresh Time</DialogTitle>

      <Wrapper>
        <FormControl fullWidth>
          <InputLabel>화면 주기 설정</InputLabel>
          <Select label="화면 주기 설정">
            <MenuItem value={10} selected>
              10초
            </MenuItem>
            <MenuItem value={20}>20초</MenuItem>
            <MenuItem value={30}>30초</MenuItem>
            <MenuItem value={40}>40초</MenuItem>
            <MenuItem value={50}>50초</MenuItem>
            <MenuItem value={60}>60초</MenuItem>
          </Select>
        </FormControl>
        <Buttons>
          <ButtonNormal className="blue">Save</ButtonNormal>
          <ButtonNormal onClick={onClose}>Cancel</ButtonNormal>
        </Buttons>
      </Wrapper>
    </Dialog>
  );
};

const Wrapper = styled.div`
  padding: 0 20px 20px 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  > button {
    flex: 1;
  }
`;
export default RefreshTime;
