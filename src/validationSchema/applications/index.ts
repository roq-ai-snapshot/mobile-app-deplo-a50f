import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  app_name: yup.string().required(),
  app_version: yup.string().required(),
  app_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
