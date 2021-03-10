# `Formik Chakra ui Components`

This package contains some common Formik components formatted with Chakra. This is some sample code, to create a basic contact form.

This is a POC.

## Install

`npm install formik-chakra-ui-components`

Usage - here is a simple contact us form using frontity, chakra and formik, and contact form 7.

```jsx

/**
 * External dependencies
 */

import { Alert, AlertIcon, Box, Button, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FormikInput from "formik-chakra-ui-components/formikInput";
import FormikTextArea from "formik-chakra-ui-components/textArea";

import { connect, useConnect } from "frontity";
/**
 * React / Frontity dependencies
 */
import React from "react";
import * as Yup from "yup";
import { Packages } from "../../../types";

type ContactUsProps = { id: number };

/**
 * ContactUs
 */
const ContactUs = ({ id }: ContactUsProps) => {
  const { state, actions } = useConnect<Packages>();


  const serverSideErrorMessage =
    state.formik.results &&
    state.formik.results[id] &&
    state.formik.results[id].serverSideErrorMessage;

  const successfulMessage =
    state.formik.results &&
    state.formik.results[id] &&
    state.formik.results[id].successfulMessage;

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string()
      .required("Name is required"),
    message: Yup.string()
      .required("Message is required"),
  });

  const onSubmit = (values, formikActions) => {
    const submitFormikContactForm7 = actions.formik.submitFormikContactForm7;
    submitFormikContactForm7({ id, values, formikActions, key: id });
  };

  return (
    <Box maxW="80%">
      {serverSideErrorMessage && (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          {serverSideErrorMessage}
        </Alert>
      )}
      {successfulMessage ? (
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          {successfulMessage}
        </Alert>
      ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <FormikInput
                  aria-label="Name"
                  name="name"
                  placeholder="Your name"
                />
                <FormikInput
                  aria-label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <FormikTextArea
                  aria-label="message"
                  name="message"
                  placeholder="Message"
                />

                <Button
                  mt={8}
                  type="submit"
                  disabled={isSubmitting}
                  colorScheme="primary"
                >
                  Send
              </Button>
              </Form>
            )}
          </Formik>
        )}
    </Box>
  );
};

export default connect(ContactUs);




```
