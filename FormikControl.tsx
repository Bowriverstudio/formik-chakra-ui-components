/**
 * React / Frontity dependencies
 */
import React from "react";
import PropTypes from "prop-types";
/**
 * Internal dependencies
 */

import FormikInput from "./formikInput";

import FormikTextArea from "./textArea";
import Select from "./select";
import Checkbox from "./checkbox";

/**
 * FormikControl
 */
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <FormikInput {...rest} />;
    case "textarea":
      return <FormikTextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};


export default FormikControl;
