import React from "react";
const Item = (props) => {
  const removeTodoHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div>
      <li>
        {props.children}
        <button onClick={() => removeTodoHandler(props.id)}>x</button>
      </li>
    </div>
  );
};
export default Item;
