import React from "react";
import "./Todo.css";

//Todo component
function Todo({ isJob, name, symbol, rowId, updateTodoSymbol }) {
  const handleChange = (e) => {
    updateTodoSymbol(rowId, e.currentTarget.value);
  };
  const todoSelection = (
    <select name="choice" onChange={handleChange} value={symbol}>
      {["Gym", "Shop", "Study", "Sleep"].map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );

  return (
    <div className="player-container">
      <span className="name">{name}</span>
      {isJob ? todoSelection : symbol}
    </div>
  );
}

export default Todo;
