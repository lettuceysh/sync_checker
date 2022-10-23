import { useForm } from 'react-hook-form';
import { NormalButton } from '@/components/Buttons';
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

const DataSourceAdd = ({ onClose, open }) => {
  const { register, handleSubmit } = useForm();

  const addDataSource = (value) => {
    console.log('value', value);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Data Source Add</DialogTitle>

      <form onSubmit={handleSubmit(addDataSource)}>
        <Wrapper>
          <FormControl fullWidth>
            <InputLabel>source target</InputLabel>
            <Select label="source target" {...register('email')}>
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
            <NormalButton type="submit">Save</NormalButton>
            <Button onClick={onClose}>Cancel</Button>
          </Buttons>
        </Wrapper>
      </form>
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

export default DataSourceAdd;
