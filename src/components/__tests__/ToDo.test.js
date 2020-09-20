import React, { Component } from "react";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import ToDo from "../ToDo";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

let component, store;

describe("<ToDo />", () => {
  beforeAll(() => {
    store = mockStore({
      toDo: {
        list: [],
        error: "",
      },
    });
    store.dispatch = jest.fn();
    component = mount(
      <Provider store={store}>
        <ToDo />
      </Provider>
    );
  });

  it("should render ToDo component", () => {
    component.debug();
    expect(component).toMatchSnapshot();
  });
});
