import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

import { FormikFieldController } from "./types";
/**
 * TextArea.
 * @param props - FormikFieldController plus rest which is passed to the Textarea.
 */
const TextArea: React.FC<FormikFieldController> = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <Field name={name} component="textarea">
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor="email">{label}</FormLabel>
          <InputGroup>
            <Textarea
              {...field}
              id={name}
              placeholder={placeholder}
              {...rest}
            />
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
export default TextArea;
