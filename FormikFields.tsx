/**
 * React / Frontity dependencies
 */
import React from "react";
import FormikControl from "./FormikControl"
import { FormikSchema } from "./types";


type Props = {
  formSchema: FormikSchema
}

/**
 * Formik Fields loops through all the form schema
 */
const FormikFields = ({ formSchema }: Props) => {

  return (
    <>
      {
        formSchema.map((field) => {
          const { name, control, formikProps } = field
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
