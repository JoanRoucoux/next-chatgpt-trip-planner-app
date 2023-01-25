import * as Yup from 'yup';
import { SelectItemType, TripFormValuesType } from '../types';

const countries: string[] = ['France', 'Spain', 'Germany', 'England'];

const initialValues: TripFormValuesType = {
  country: null,
  endDate: null,
  pace: 'medium',
  travelers: 1,
  startDate: null,
};

const paces: SelectItemType[] = [
  { label: 'Slow & Easy', value: 'slowAndEasy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Fast-paced', value: 'fastPaced' },
];

const validationSchema: Yup.SchemaOf<TripFormValuesType> = Yup.object().shape({
  country: Yup.string().required('Field required').nullable(),
  endDate: Yup.string().required('Field required').nullable(),
  pace: Yup.string().required('Field required'),
  travelers: Yup.number()
    .required('Field required')
    .positive()
    .min(1, 'Must be greater than 0'),
  startDate: Yup.string().required('Field required').nullable(),
});

export const getPaceLabel = (currentPaceValue: string): string =>
  paces.find((pace: SelectItemType) => pace.value === currentPaceValue)
    ?.label || '';

const TripFormConfig = {
  countries,
  initialValues,
  paces,
  validationSchema,
};

export default TripFormConfig;
