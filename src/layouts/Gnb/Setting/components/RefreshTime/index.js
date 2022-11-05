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
import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { Controller, useForm } from 'react-hook-form';
import { getStorage, setStorage } from '@/libs/utils/storage';
import MuiSelect from '@/components/customMui/MuiSelect';

export const STORAGE_INTERVAL_KEY = 'intervalTime';

const RefreshTime = ({ onClose }) => {
  const queryClient = useQueryClient();
  const { handleSubmit, reset, control } = useForm();

  useEffect(() => {
    const interval = getStorage(STORAGE_INTERVAL_KEY);

    if (interval) {
      changeInterval(interval);
      reset({ interval });
    }
  }, []);

  const changeInterval = (interval) => {
    setStorage(STORAGE_INTERVAL_KEY, interval);

    queryClient.setDefaultOptions({
      queries: {
        refetchInterval: interval
      }
    });
  };

  const save = ({ interval }) => {
    changeInterval(interval);
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={true}>
      <DialogTitle>Screen Refresh Time</DialogTitle>

      <Wrapper>
        <form onSubmit={handleSubmit(save)}>
          <FormControl fullWidth>
            <InputLabel>화면 주기 설정</InputLabel>
            <Controller
              name="interval"
              rules={{ required: 'this is required' }}
              control={control}
              render={({ field }) => (
                <Select {...field} label="화면 주기 설정">
                  <MenuItem value={10000} selected>
                    10초
                  </MenuItem>
                  <MenuItem value={20000}>20초</MenuItem>
                  <MenuItem value={30000}>30초</MenuItem>
                  <MenuItem value={40000}>40초</MenuItem>
                  <MenuItem value={50000}>50초</MenuItem>
                  <MenuItem value={60000}>60초</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <Buttons>
            <ButtonNormal className="blue" type="submit">
              Save
            </ButtonNormal>
            <ButtonNormal onClick={onClose} type="button">
              Cancel
            </ButtonNormal>
          </Buttons>
        </form>
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
