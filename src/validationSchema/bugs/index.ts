import * as yup from 'yup';

export const bugValidationSchema = yup.object().shape({
  bug_name: yup.string().required(),
  bug_status: yup.string().required(),
  bug_description: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  test_id: yup.string().nullable().required(),
});
