import { colors } from '@/styles/colors';
import { Button } from '@mui/material';

export const ButtonNormal = ({ children, ...props }) => {
  return (
    <Button sx={style} {...props}>
      {children}
    </Button>
  );
};

const style = {
  backgroundColor: 'white',
  '&.red': {
    border: `1px solid ${colors.red100}`,
    color: colors.red100
  },
  '&.blue': {
    border: `1px solid ${colors.blue100}`,
    color: colors.blue100
  }
};
