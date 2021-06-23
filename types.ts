import { ThemingProps } from "@chakra-ui/system";

export type FormikFieldController = ThemingProps & {
  /**
   * Formik's name.
   */
  name: string;
  /**
   * Optional Label for the Field.
   */
  label?: string;
  /**
   * Optional placeholder.
   */
  placeholder?: string;

  /**
   * Number of Rows in textarea.
   */
  rows?: number;

  width?: string;
};


export type FormikSchema = Array<FormikSchemaField>
export interface FormikProps {

  type?: string;

  placeholder?: string;
  label?: string;
  options?: Array<{ option: string; value: string; }>;
  rows?: number;
}
export interface FormikSchemaField {

  /**
   * Used in FormikControl, to select the correct component.
   */
  control: 'input' | 'textarea' | 'select' | 'switch' | 'checkbox' | 'price' | 'none'
  /**
      * The name.
      */
  name: string;
  /**
   * Props passed to Formik Component.
   */
  formikProps: FormikProps;

  /**
   * Validation
   */
  required?: boolean;
  validationType?: "string" | "number";

  validations?: Array<YupValidation>

  /**
   * Default initial value.
   */
  value?: any;

}

export interface YupValidation {
  type: string;
  value?: string;
  error_message?: string;
}