import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { bugValidationSchema } from 'validationSchema/bugs';
import { UserInterface } from 'interfaces/user';
import { TestInterface } from 'interfaces/test';
import { BugInterface } from 'interfaces/bug';

function BugCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: BugInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.bug.create({ data: values as RoqTypes.bug });
      resetForm();
      router.push('/bugs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<BugInterface>({
    initialValues: {
      bug_name: '',
      bug_status: '',
      bug_description: '',
      user_id: (router.query.user_id as string) ?? null,
      test_id: (router.query.test_id as string) ?? null,
    },
    validationSchema: bugValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Bugs',
              link: '/bugs',
            },
            {
              label: 'Create Bug',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Bug
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.bug_name}
            label={'Bug Name'}
            props={{
              name: 'bug_name',
              placeholder: 'Bug Name',
              value: formik.values?.bug_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.bug_status}
            label={'Bug Status'}
            props={{
              name: 'bug_status',
              placeholder: 'Bug Status',
              value: formik.values?.bug_status,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.bug_description}
            label={'Bug Description'}
            props={{
              name: 'bug_description',
              placeholder: 'Bug Description',
              value: formik.values?.bug_description,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<TestInterface>
            formik={formik}
            name={'test_id'}
            label={'Select Test'}
            placeholder={'Select Test'}
            fetcher={() => roqClient.test.findManyWithCount({})}
            labelField={'test_name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/bugs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'bug',
    operation: AccessOperationEnum.CREATE,
  }),
)(BugCreatePage);
