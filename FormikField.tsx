/**
 * React / Frontity dependencies
 */
import React from "react";
import FormikControl from "formik-chakra-ui-components//FormikControl"
import { FormikSchema } from "formik-chakra-ui-components//types";


type Props = {
  formSchema: FormikSchema
  fieldName: string;
}

/**
 * Formik Fields loops through all the form schema
 */
const FormikFields = ({ formSchema, fieldName }: Props) => {

  return (
    <>
      {
        formSchema.map((field) => {
          const { name, control, formikProps } = field
          if (fieldName === name)
            return (
              <FormikControl
                key={name}
                name={name}
                control={control}
                {...formikProps}
              />
            )
        })
      }
    </>
  )
};


export default FormikFields;
