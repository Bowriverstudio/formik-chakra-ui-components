/**
 * External dependencies
 */
import { Field, ErrorMessage } from "formik";

/**
 * React / Frontity dependencies
 */
import React from "react";
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

import { FormikFieldController } from "formik-chakra-ui-components/types";

/**
 * Select
 */
const FormikCheckbox = (props) => {
  const { label, name, ...rest } = props;


  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <InputGroup>
            <Checkbox name={name}></Checkbox>
          </InputGroup>
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>

  );
};


export default FormikCheckbox;
