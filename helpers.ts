import { FormikSchema, FormikSchemaField } from "./types";
import * as Yup from "yup";

type InitialValueProps = {


    /**
     * Schema
     */
    schema: FormikSchema;

    /**
     * Optional Values to override the intial value 
     */
    override?: any;
}
/**
 * Creates the Initial values from the configuration.
 * 
 * Usage:
 * 
 * @param schema 
 * 
 * @returns { {['name']: value}}
 */
export function createInitialValues({ schema, override }: InitialValueProps) {
    const initialValues = {};
    schema.forEach(item => {
        // TODO clean this logic up. It works but can be more readable.
        let overrideValue = ""
        if (override) {
            if ((item.name in override)) {
                overrideValue = override[item.name]
            }
        }
        initialValues[item.name] = overrideValue || item.value || ""
    });

    return initialValues;
}

export function createYupSchema(schema: FormikSchema) {
    const yepSchema = schema.reduce(_createYupSchema, {});
    return Yup.object().shape(yepSchema);
}
// Code taken from: https://codesandbox.io/s/clever-snyder-1u410?fontsize=14&file=/src/yupSchemaCreator.js:0-485
/**
 *   Sample of custom usage: 
 *   const yepSchema = personalSchema.reduce(_createYupSchema, {});
 *   yepSchema['country'] = Yup.mixed().notOneOf(['None'])
 *   yepSchema['region'] = Yup.mixed().notOneOf(['None'])
 *   const validationSchema = Yup.object().shape(yepSchema);
 */
export function _createYupSchema(schema, config: FormikSchemaField) {

    const { name, required, validationType, validations = [] } = config;

    if (!Yup[validationType]) {
        return schema;
    }
    let validator = Yup[validationType]();

    if (validations.length > 0) {
        validations.forEach(validation => {
            const { value, error_message, type } = validation;
            if (!validator[type]) {
                return;
            }
            if (type === 'required') {
                validator = validator[type](error_message);
            } else {
                validator = validator[type](value, error_message);
            }
        });
    } else if (required) {
        // The validations is empty but it is required.  Adding default
        validator = validator['required']('Field is required.');
    }

    schema[name] = validator;
    return schema;
}