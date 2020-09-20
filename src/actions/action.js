import { addToDo, removeToDo, selectToDo } from "../reducers/toDoReducer";

export const addItem = (name) => (dispatch) => {
  dispatch({
    type: addToDo.toString(),
    payload: { text: name, selected: false },
  });
};

export const selectItem = (name) => (dispatch) => {
  dispatch({
    type: selectToDo.toString(),
    payload: name,
  });
};

export const removeItem = (name) => (dispatch) => {
  dispatch({
    type: removeToDo.toString(),
    payload: name,
  });
};
