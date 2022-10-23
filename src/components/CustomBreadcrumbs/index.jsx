import { Breadcrumbs, Typography } from '@mui/material';

const CustomBreadcrumbs = ({ current }) => {
  return (
    <Breadcrumbs sx={customStyle}>
      <Typography variant="normal">{current}</Typography>
    </Breadcrumbs>
  );
};

const customStyle = {
  paddingBottom: '10px'
};

export default CustomBreadcrumbs;
