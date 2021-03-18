import { FormikSchema, FormikSchemaField } from "../../../types";
import * as Yup from "yup";
/**
 * Creates the Initial values from the configuration.
 * 
 * Usage:
 * 
 * @param schema 
 * @returns { {['name']: value}}
 */
export function createInitialValues(schema: FormikSchema) {
    const initialValues = {};
    schema.forEach(item => {
        initialValues[item.name] = item.value || "";
    });

    return initialValues;
}

export function createYupSchema(schema: FormikSchema) {
    const yepSchema = schema.reduce(_createYupSchema, {});
    return Yup.object().shape(yepSchema);
}
// Code taken from: https://codesandbox.io/s/clever-snyder-1u410?fontsize=14&file=/src/yupSchemaCreator.js:0-485
function _createYupSchema(schema, config: FormikSchemaField) {

    const { name, validationType, validations = [] } = config;

    if (!yup[validationType]) {
        return schema;
    }
    let validator = yup[validationType]();
    validations.forEach(validation => {
        console.log("validation", validation)
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
    schema[name] = validator;
    return schema;
}