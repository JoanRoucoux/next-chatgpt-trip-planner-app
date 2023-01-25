import * as React from 'react';
import { FormikProps } from 'formik';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TripFormConfig } from '../commons';
import { EnhancedTripFormType, TripFormValuesType } from '../commons/types';
import SelectInput from '../components/SelectInput';

const { countries, paces } = TripFormConfig;

const TripForm = (
  props: EnhancedTripFormType & FormikProps<TripFormValuesType>
): JSX.Element => {
  const {
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    setFieldValue,
    touched,
    values,
  } = props;

  const { country, endDate, pace, startDate, travelers } = values;

  return (
    <Box autoComplete="off" component="form" noValidate onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Autocomplete
            autoHighlight
            disablePortal
            onBlur={handleBlur}
            onChange={(_e: React.SyntheticEvent, value: string | null) =>
              setFieldValue('country', value)
            }
            options={countries}
            renderInput={(params) => (
              <TextField
                {...params}
                error={touched.country && Boolean(errors.country)}
                fullWidth
                helperText={touched.country && errors.country}
                id="country"
                label="Country"
                name="country"
                required
              />
            )}
            value={country}
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item xs={6}>
            <DatePicker
              disablePast
              label="Start date"
              openTo="year"
              views={['year', 'month', 'day']}
              inputFormat="MM/dd/yyyy"
              value={startDate}
              onChange={(value: string | null) =>
                setFieldValue('startDate', value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={touched.startDate && Boolean(errors.startDate)}
                  fullWidth
                  helperText={touched.startDate && errors.startDate}
                  id="startDate"
                  name="startDate"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              disablePast
              label="End date"
              openTo="year"
              views={['year', 'month', 'day']}
              inputFormat="MM/dd/yyyy"
              value={endDate}
              onChange={(value: string | null) =>
                setFieldValue('endDate', value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={touched.endDate && Boolean(errors.endDate)}
                  fullWidth
                  helperText={touched.endDate && errors.endDate}
                  id="endDate"
                  name="endDate"
                  required
                />
              )}
            />
          </Grid>
        </LocalizationProvider>
        <Grid item xs={6}>
          <TextField
            error={touched.travelers && Boolean(errors.travelers)}
            fullWidth
            helperText={touched.travelers && errors.travelers}
            id="travelers"
            label="Travelers"
            name="travelers"
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="number"
            value={travelers}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectInput
            error={touched.pace && Boolean(errors.pace)}
            helperText={touched.pace && errors.pace}
            inputLabel="Pace"
            inputLabelId="paceLabelId"
            items={paces}
            name="pace"
            onChange={handleChange}
            selectId="paceSelectId"
            selectLabel="Pace"
            value={pace}
          />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2 }}>
        <Button fullWidth onClick={handleReset} variant="outlined">
          Reset
        </Button>
        <LoadingButton
          fullWidth
          loading={isSubmitting}
          loadingIndicator="Loading…"
          type="submit"
          variant="contained"
        >
          Generate
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default TripForm;
