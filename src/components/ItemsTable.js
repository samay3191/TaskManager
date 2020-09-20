import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, selectItem } from "../actions/action";
import CheckedIcon from "../images/icon-checked.svg";
import DeleteIcon from "../images/icon-delete.svg";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const { text, selected } = data;
  
  return (
    <div className="flex p-2 bg-white justify-between rounded-md my-1">
      <div>{text}</div>
      <div className="flex text-blue-600">
        {!selected && (
          <div className="p-1 hover:bg-blue-100 rounded-full">
            <img
              src={CheckedIcon}
              alt="select"
              className="w-4 align-middle mx-1 cursor-pointer"
              onClick={() => dispatch(selectItem(data.text))}
            />
          </div>
        )}
        <div className="p-1 hover:bg-red-100 rounded-full">
          <img
            src={DeleteIcon}
            alt="delet"
            className="w-4 align-middle cursor-pointer"
            onClick={() => dispatch(removeItem(data.text))}
          />
        </div>
      </div>
    </div>
  );
};

const ItemsTable = ({ data }) => {
  return (
    <div className="flex flex-col-reverse">
      {data.map((item) => (
        <Item key={item.text} data={item} />
      ))}
    </div>
  );
};

export default ItemsTable;
