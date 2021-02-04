import { Container } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
type TestingWrapperProps = {
  /**
   * Formik components.
   */
  children: JSX.Element[] | JSX.Element;
  /**
   * The initial values of the children components.
   */
  initialValues: Record<string, string | boolean | number>;
  /**
   * The validationSchema using Yup for the children components.
   */
  validationSchema: Record<string, string | boolean | number>;
};

const TestingWrapper = ({
  // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  children,
  initialValues,
  validationSchema,
}: TestingWrapperProps): JSX.Element => {
  const onSubmit = (
    _values: Record<string, string | boolean | number>, // eslint-disable-line @typescript-eslint/no-unused-vars
    _formikActions: unknown // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => { }; // eslint-disable-line @typescript-eslint/no-empty-function

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form noValidate>{children}</Form>
      </Formik>
    </Container>
  );
};
export default TestingWrapper;
