import * as yup from 'yup';

export const testValidationSchema = yup.object().shape({
  test_name: yup.string().required(),
  test_result: yup.string().required(),
  test_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  deployment_id: yup.string().nullable().required(),
});
