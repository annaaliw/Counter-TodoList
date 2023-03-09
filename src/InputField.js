import React, { useState } from "react";

const InputField = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const addItemHandler = () => {
    const id = Math.random().toString();
    const newItem = {
      id: id,
      todo: enteredValue
    };
    props.onAddToList(newItem); //pass to parent
    setEnteredValue("");
  };

  const sortItems = (e) => {
    props.onSortList(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={enteredValue}
        onChange={(e) => {
          setEnteredValue(e.target.value);
        }}
      ></input>
      <button onClick={addItemHandler}>Add</button>
      <select onChange={sortItems}>
        <option value="">Sort</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
};

export default InputField;
