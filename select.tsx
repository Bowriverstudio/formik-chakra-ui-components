/**
 * External dependencies
 */
import { Field, ErrorMessage } from "formik";

/**
 * React / Frontity dependencies
 */
import React from "react";
import {
  Select,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

import { FormikFieldController } from "types";

/**
 * Select
 */
const FormikSelect: React.FC<FormikFieldController> = (props) => {
  const { label, name, placeholder, options, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <InputGroup>
            <Select {...field} id={name} placeholder={placeholder} {...rest} >
              {options.map(({ value, option }) => {
                return (
                  <option key={value} value={value}>
                    {option}
                  </option>
                );
              })}
            </Select>
            {form.errors[name] && form.touched[name] && (
              <InputRightElement>
                <Icon as={FaExclamationTriangle} boxSize={4} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>

  );
};


export default FormikSelect;
