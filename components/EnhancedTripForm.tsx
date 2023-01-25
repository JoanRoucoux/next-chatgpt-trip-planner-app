import { withFormik } from 'formik';
import { TripFormConfig } from '../commons';
import { EnhancedTripFormType, TripFormValuesType } from '../commons/types';
import TripForm from './TripForm';

const { initialValues, validationSchema } = TripFormConfig;

const EnhancedTripForm = withFormik<EnhancedTripFormType, TripFormValuesType>({
  mapPropsToValues: () => initialValues,
  handleSubmit: async (
    values: TripFormValuesType,
    { props, setSubmitting }
  ) => {
    try {
      setSubmitting(true);

      const response = await fetch('/api/itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      const { onSubmitCallback } = props;
      if (data.result) {
        onSubmitCallback(data.result.trim());
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  },
  validationSchema,
  displayName: 'TripForm', // helps with React DevTools
})(TripForm);

export default EnhancedTripForm;
