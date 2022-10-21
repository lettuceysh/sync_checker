import styled from '@emotion/styled';
import { Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

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
      </Wrapper>
    </Dialog>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default RefreshTime;
