import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  const deleteHandler = (id) => {
    props.onRemove(id);
  };
  return (
    <ul>
      {props.items.map((todo) => (
        <Item key={todo.id} id={todo.id} onDelete={deleteHandler}>
          {todo.todo}
        </Item>
      ))}
    </ul>
  );
};
export default ItemList;
