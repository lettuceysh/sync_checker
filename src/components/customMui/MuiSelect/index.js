const { FormControl, InputLabel, Select, MenuItem } = require('@mui/material');

const MuiSelect = () => {
  return (
    <FormControl>
      <InputLabel>DB Type</InputLabel>
      <Select label="DB Type">
        <MenuItem value={'1'} selected>
          Oracle
        </MenuItem>
      </Select>
    </FormControl>
  );
};
