import React from "react";
import { shallow } from "enzyme";
import ItemsTable from "../ItemsTable";

const initialProps = {
  data: [
    {
      id: "abc",
      text: "Food",
      selected: false,
    },
  ],
};

let component;

describe("<ItemsTable />", () => {
  beforeAll(() => {
    component = shallow(<ItemsTable {...initialProps} />);
  });

  it("should render ItemsTable component", () => {
    expect(component).toMatchSnapshot();
  });
});
