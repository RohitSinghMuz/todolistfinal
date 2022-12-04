import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component, useState } from "react";
const Testtodofun = () => {
  const [todoText, settodoText] = useState("");
  const [todoData, settodoData] = useState([]);
  const [editText, seteditText] = useState("");

  const handleTodo = () => {
    // console.log(this.state.todoText);
    settodoData([...todoData, todoText]);
  };
  const handleDelete = (idx) => {
    // console.log(idx);
    const delData = todoData.filter((item, index) => {
      return index !== idx;
    });
    settodoData(delData);
  };

  const handleEdit = (idx) => {
    const editdata = todoData.map((item, index) => {
      if (index == idx) {
        item = editText;
      }
      return item;
    });
    settodoData(editdata);
  };

  return (
    <>
      <Box>
        <input
          type="text"
          placeholder="Add todo"
          onChange={(e) => settodoText(e.target.value)}
        />
        <button onClick={() => handleTodo()}>Add todo</button>

        <input
          type="text"
          placeholder="Edit todo"
          onChange={(e) => seteditText(e.target.value)} />
        {todoData.map((item, idx) => {
          return (
            <div key={idx}>
              <p>{item}</p>
              <button onClick={() => handleDelete(idx)}>Delete</button>
              <button onClick={() => handleEdit(idx)}>Edit</button>
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default Testtodofun;
