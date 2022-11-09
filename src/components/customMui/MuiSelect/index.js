const { FormControl, InputLabel, Select, MenuItem } = require('@mui/material');
const { Controller } = require('react-hook-form');

const MuiSelect = ({ options, label, required, rules, ...props }) => {
  return (
    <FormControl fullWidth size="small" required={required} rules={rules}>
      <InputLabel>{label}</InputLabel>
      <Controller
        {...props}
        size="small"
        render={({ field }) => (
          <Select {...field} label={label}>
            {options.map((option, index) => (
              <MenuItem value={option.value} key={index}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default MuiSelect;
