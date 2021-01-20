import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import * as Yup from "yup";

import Checkbox from "../checkbox";
import TestingWrapper from "../utils/testingWrapper";
const validationSchema = Yup.object({
  termsOfService: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

describe("Formik Chakra Ui Components", () => {
  test("Checkbox", () => {
    const json = TestRenderer.create(
      <TestingWrapper
        initialValues={{ termsOfService: false }}
        validationSchema={validationSchema}
      >
        <Checkbox name="termsOfService">
          I agree to the <a href="/privacy-policy/">Privacy Policy</a>
        </Checkbox>
      </TestingWrapper>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  test("Checkbox renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <TestingWrapper
        initialValues={{ termsOfService: false }}
        validationSchema={validationSchema}
      >
        <Checkbox name="termsOfService">
          I agree to the <a href="/privacy-policy/">Privacy Policy</a>
        </Checkbox>
      </TestingWrapper>,
      div
    );
    expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
  });
});
