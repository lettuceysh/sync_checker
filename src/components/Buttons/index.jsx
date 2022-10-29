import { colors } from '@/styles/colors';
import { withTheme } from '@emotion/react';
import { Button } from '@mui/material';

export const ButtonNormal = ({ children, ...props }) => {
  return (
    <Button sx={style} {...props}>
      {children}
    </Button>
  );
};

const style = {
  height: '30px',
  fontWeight: 600,
  fontSize: 13,
  backgroundColor: 'white',
  '&.red': {
    border: `1px solid ${colors.red100}`,
    color: colors.red100
  },
  '&.blue': {
    border: `1px solid ${colors.blue100}`,
    color: colors.blue100
  },
  '&.blue2': {
    border: `1px solid ${colors.blue90}`,
    color: colors.blue90
  }
};

export const ButtonNormalFill = ({ children, ...props }) => {
  return (
    <Button sx={styleFill} {...props}>
      {children}
    </Button>
  );
};

const styleFill = {
  backgroundColor: colors.gray900,
  border: 'none',
  color: 'white',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: colors.gray900,
    border: 'none',
    color: 'white'
  },
  '&.red': {
    border: `1px solid ${colors.red100}`,
    color: colors.red100
  },
  '&.blue': {
    background: colors.blue100,
    color: 'white'
  },
  '&.blue2': {
    border: `1px solid ${colors.blue90}`,
    color: colors.blue90
  }
};
