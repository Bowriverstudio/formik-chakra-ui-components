/**
 * External dependencies
 */
import { Field, ErrorMessage } from "formik";

/**
 * React / Frontity dependencies
 */
import React from "react";
import {
  Switch,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

import { FormikFieldController } from "formik-chakra-ui-components/types";

/**
 * Select
 */
const FormikSwitch = (props) => {
  const { label, addSpacer, name, ...rest } = props;


  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} display="flex" alignItems="center">
          <FormLabel htmlFor={name} mb="0">{label}</FormLabel>
          {addSpacer && <Spacer />}
          <Switch {...field} id={name} name={name} {...rest}></Switch>
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>

  );
};

export default FormikSwitch;
