import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import * as Yup from "yup";

import TextArea from "../textArea";
import TestingWrapper from "../utils/testingWrapper";

const validationSchema = Yup.object({
  termsOfService: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

describe("Formik Chakra Ui Components", () => {
  test("TextArea", () => {
    const json = TestRenderer.create(
      <TestingWrapper
        initialValues={{ termsOfService: false }}
        validationSchema={validationSchema}
      >
        <TextArea name="termsOfService"></TextArea>
      </TestingWrapper>
    ).toJSON();
    // const head = (helmetContext as FilledContext).helmet;
    expect(json).toMatchSnapshot();
  });

  test("TextArea renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <TestingWrapper
        initialValues={{ termsOfService: false }}
        validationSchema={validationSchema}
      >
        <TextArea name="termsOfService"></TextArea>
      </TestingWrapper>,
      div
    );
    expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
  });
});
