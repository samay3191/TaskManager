import { getUniqueId, isEmpty } from "../helper/utils";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  list: [],
  error: "",
};

const toDoReducer = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo(state, action) {
      const uniqueId = getUniqueId();
      const payload = action.payload;
      const tempList = [...state.list];
      let error = "";
      const item = tempList.find(
        (item) => item.text === payload.text && !item.selected
      );
      if (isEmpty(item)) {
        tempList.push({ ...payload, id: uniqueId });
      } else {
        error = `"${payload.text}" already exists.`;
      }
      return { ...state, list: tempList, error };
    },
    selectToDo(state, action) {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.selected = !todo.selected;
      }
    },
    removeToDo(state, action) {
      const tempList = state.list.slice();
      const index = tempList.findIndex((i) => i.id === action.payload);
      tempList.splice(index, 1);
      return { ...state, list: tempList };
    },
  },
});

const { reducer, actions } = toDoReducer;
export const { addToDo, selectToDo, removeToDo } = actions;
export default reducer;
