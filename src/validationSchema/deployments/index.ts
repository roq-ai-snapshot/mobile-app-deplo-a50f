import * as yup from 'yup';

export const deploymentValidationSchema = yup.object().shape({
  deployment_name: yup.string().required(),
  deployment_version: yup.string().required(),
  deployment_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
