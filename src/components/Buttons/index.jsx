import { colors } from '@/styles/colors';
import { Button } from '@mui/material';

export const NormalButton = ({ children }) => {
  return <Button sx={style}>{children}</Button>;
};

const style = {
  backgroundColor: colors.green100,
  color: colors.white100,
  '&:hover': {
    backgroundColor: colors.green100
  }
};
