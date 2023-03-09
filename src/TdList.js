import React, { useState } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";

const TdList = () => {
  const [todoList, setTodoList] = useState([]);

  const addToListHandler = (todo) => {
    setTodoList((prevList) => {
      return [todo, ...prevList];
    });
  };

  const removeTodoHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const sortTodoHandler = (typeSort) => {
    if (typeSort === "") return;
    if (
      typeSort === "A-Z"
        ? setTodoList(
            [...todoList].sort((a, b) => a.todo.localeCompare(b.todo))
          )
        : setTodoList(
            [...todoList].sort((a, b) => b.todo.localeCompare(a.todo))
          )
    );
  };

  return (
    <div>
      <InputField onAddToList={addToListHandler} onSortList={sortTodoHandler} />
      <ItemList items={todoList} onRemove={removeTodoHandler} />
    </div>
  );
};
export default TdList;
