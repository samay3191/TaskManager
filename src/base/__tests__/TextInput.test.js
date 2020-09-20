import React from "react";
import { shallow } from "enzyme";
import TextInput from "../TextInput";

const initialProps = {
  value: "",
  placeHolder: "Enter data",
  onChange: jest.fn(),
};

let component;

describe("<TextInput />", () => {
  beforeAll(() => {
    component = shallow(<TextInput {...initialProps} />);
  });

  it("should render TextInput component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render simulate TextInput change", () => {
    component.find("input").simulate("change", { target: { value: "a" }});
    expect(initialProps.onChange).toHaveBeenCalled();
  });
});
