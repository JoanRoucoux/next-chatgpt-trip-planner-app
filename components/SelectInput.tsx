import * as React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { SelectInputType, SelectItemType } from '../commons/types';

const SelectInput = ({
  error,
  helperText,
  inputLabel,
  inputLabelId,
  items,
  name,
  onChange,
  selectId,
  selectLabel,
  value,
}: SelectInputType): JSX.Element => (
  <FormControl error={error} fullWidth>
    <InputLabel id={inputLabelId}>{inputLabel}</InputLabel>
    <Select
      id={selectId}
      label={selectLabel}
      labelId={inputLabelId}
      name={name}
      onChange={onChange}
      value={value}
    >
      {items.map((item: SelectItemType) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
    {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default SelectInput;
