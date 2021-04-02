import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

import { FormikFieldController } from "./types";
/**
 * Input.
 * @param props - FormikFieldController plus rest which is passed to the Input.
 */
const FormikPrice: React.FC<FormikFieldController> = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {


        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor="email">{label}</FormLabel>
            <InputGroup>
              <InputLeftElement>
                $
              </InputLeftElement>
              <Input {...field} id={name} type="number" placeholder={placeholder}

                {...rest} w="100px" />
              {form.errors[name] && form.touched[name] && (
                <InputRightElement>
                  <Icon as={FaExclamationTriangle} boxSize={4} color="red.500" />
                </InputRightElement>
              )}
            </InputGroup>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        )
      }}
    </Field>
  );
};
export default FormikPrice;
