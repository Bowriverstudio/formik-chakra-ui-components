import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

import { FormikFieldController } from "./types";
type Props = FormikFieldController & { type?: "email" | "password" };
/**
 * Input.
 * @param props - FormikFieldController plus rest which is passed to the Input.
 */
const FormikInput: React.FC<Props> = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor="email">{label}</FormLabel>
          <InputGroup>
            <Input {...field} id={name} placeholder={placeholder} {...rest} />
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
export default FormikInput;
