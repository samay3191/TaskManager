import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeItem, selectItem } from "../actions/action";
import CheckedIcon from "../images/icon-checked.svg";
import DeleteIcon from "../images/icon-delete.svg";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const { id, text, selected } = data;

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
              onClick={() => dispatch(selectItem(id))}
            />
          </div>
        )}
        <div className="p-1 hover:bg-red-100 rounded-full">
          <img
            src={DeleteIcon}
            alt="delet"
            className="w-4 align-middle cursor-pointer"
            onClick={() => dispatch(removeItem(id))}
          />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }),
};

const ItemsTable = ({ data }) => {
  return (
    <div className="flex flex-col-reverse">
      {data.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
};

ItemsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    })
  ),
};

export default ItemsTable;
