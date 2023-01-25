import { SelectChangeEvent } from '@mui/material/Select';
import SelectItemType from './SelectItemType';

interface SelectInputType {
  error?: boolean;
  helperText?: string | boolean;
  inputLabel: string;
  inputLabelId: string;
  items: SelectItemType[];
  name: string;
  onChange: (event: SelectChangeEvent) => void;
  selectId: string;
  selectLabel: string;
  value: string;
}

export default SelectInputType;
