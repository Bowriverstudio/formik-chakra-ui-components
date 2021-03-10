import { Checkbox, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

import { FormikFieldController } from "./types";
/**
 * Checkbox.
 * @param props - FormikFieldController plus rest which is passed to the Checkbox.
 */
const FormikCheckbox: React.FC<FormikFieldController> = (props) => {
  const { name, children, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name]}>
          <Checkbox {...field} id={name} {...rest}>
            {children}
          </Checkbox>
          {form.errors[name] && form.submitCount > 0 && (
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};
export default FormikCheckbox;
