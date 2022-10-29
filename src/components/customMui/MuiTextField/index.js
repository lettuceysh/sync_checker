const { TextField } = require('@mui/material');

const MuiTextField = (props) => {
  return <TextField {...props} variant="outlined" fullWidth size="small" />;
};

export default MuiTextField;
