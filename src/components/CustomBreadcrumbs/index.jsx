import { Breadcrumbs, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const CustomBreadcrumbs = ({ current }) => {
  return (
    <Breadcrumbs sx={customStyle}>
      <Typography variant="normal" sx={customTypo}>
        <AcUnitIcon style={{ fontSize: '15px' }} />
        {current}
      </Typography>
    </Breadcrumbs>
  );
};

const customStyle = {
  paddingBottom: '10px'
};

const customTypo = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  svg: {
    marginRight: '3px'
  }
};

export default CustomBreadcrumbs;
