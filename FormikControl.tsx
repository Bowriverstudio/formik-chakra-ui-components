/**
 * React / Frontity dependencies
 */
import React from "react";
/**
 * Internal dependencies
 */

import FormikInput from "./formikInput";

import FormikTextArea from "./textArea";
import Select from "./select";
import Checkbox from "./checkbox";
import FormikPrice from "./FormikPrice"
import FormikSwitch from "./FormikSwitch"

/**
 * FormikControl
 */
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <FormikInput {...rest} />;
    case "price":
      return <FormikPrice {...rest} />;
    case "textarea":
      return <FormikTextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "switch":
      return <FormikSwitch {...rest} />
    default:
      return null;
  }
};


export default FormikControl;
