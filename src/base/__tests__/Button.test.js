import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

const initialProps = {
  text: "Submit",
  onClick: jest.fn(),
};

let component;

describe("<Button />", () => {
  beforeAll(() => {
    component = shallow(<Button {...initialProps} />);
  });

  it("should render Button component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render simulate button click", () => {
    component.find("button").simulate("click");
    expect(initialProps.onClick).toHaveBeenCalled();
  });
});
