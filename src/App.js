import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDo from "./components/ToDo";
import { addToDo } from "./reducers/toDoReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToDo({ text: "Food", selected: true }, "toDo"));
    dispatch(addToDo({ text: "Work", selected: false }, "toDo"));
  }, []);

  return <div className="bg-white w-screen h-screen">
    <div className="text-center text-2xl bg-blue-500 text-white font-bold p-2 shadow-sm">To-Do</div>
    <ToDo />
  </div>;
};

export default App;
