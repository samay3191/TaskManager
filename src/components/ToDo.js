import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../actions/action";
import Button from "../base/Button";
import TextInput from "../base/TextInput";
import { isEmpty } from "../helper/utils";
import ItemsTable from "./ItemsTable";
import ItemConstants from "../constants/itemConstants";

const ToDo = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const [type, setType] = useState(ItemConstants.ALL);
  const [showList, setShowList] = useState([]);
  const { error, list: toDoList } = useSelector((state) => state.toDo);

  const handleAddItem = () => {
    setItem("");
    dispatch(addItem(item.trim()));
  };

  const updateList = () => {
    switch (type) {
      case ItemConstants.ACTIVE:
        return toDoList.filter((i) => i.selected === false);
      case ItemConstants.SELECTED:
        return toDoList.filter((i) => i.selected === true);
      case ItemConstants.ALL:
      default:
        return toDoList;
    }
  };

  useEffect(() => {
    setShowList(updateList());
  }, [type, toDoList]);

  const Filter = ({ text, filterType }) => (
    <div
      className={`cursor-pointer hover:text-orange-600 m-1 ${
        type === filterType ? "text-blue-700" : ""
      }`}
      onClick={() => setType(filterType)}
    >
      {text}
    </div>
  );

  return (
    <div className="bg-blue-200 rounded-lg m-4 p-2 shadow-sm flex flex-col">
      <div className="flex justify-center flex-wrap my-4">
        <TextInput
          value={item}
          onChange={setItem}
          placeHolder="Inset an Item"
        />
        <Button
          text="Submit"
          onClick={handleAddItem}
          disabled={isEmpty(item)}
        />
      </div>
      <div className="p-1 text-center h-8 text-red-700">
        {!isEmpty(error) && <div className="bg-white rounded-md box-border border border-red-700">{`Error: ${error}`}</div>}
      </div>
      <div className="my-4">
        <ItemsTable data={showList} />
      </div>
      <div className="flex justify-center items-center text-xs font-bold px-1">
        <div>ALL({toDoList.length})</div>
        <div className="mx-auto flex">
          <Filter text="All" filterType={ItemConstants.ALL} />
          <Filter text="Active" filterType={ItemConstants.ACTIVE} />
          <Filter text="Completed" filterType={ItemConstants.SELECTED} />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
