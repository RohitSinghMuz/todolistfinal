import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

class Testfaizan extends Component {
  state = {
    todoText: "",
    todoData: [],
    editText: "",
  };
  handleTodo = () => {
    // console.log(this.state.todoText);
    this.setState({ todoData: [...this.state.todoData, this.state.todoText] });
  };
  handleDelete = (idx) => {
    // console.log(idx);
    const delData = this.state.todoData.filter((item, index) => {
      return index !== idx;
    });
    this.setState({ todoData: delData });
  };

  handleEdit = (idx) => {
    const editdata = this.state.todoData.map((item, index) => {
      if (index == idx) {
        item = this.state.editText;
      }
      return item;
    });
    this.setState({ todoData: editdata });
  };
  render() {
    return (
      <>
        <Box>
          <input
            type="text"
            placeholder="Add todo"
            onChange={(e) => this.setState({ todoText: e.target.value })}
          />
          <button onClick={() => this.handleTodo()}>Add todo</button>

          <input
            type="text"
            placeholder="Edit todo"
            onChange={(e) => this.setState({ editText: e.target.value })}
          />
          {this.state.todoData.map((item, idx) => {
            return (
              <div key={idx}>
                <p>{item}</p>
                <button onClick={() => this.handleDelete(idx)}>Delete</button>
                <button onClick={() => this.handleEdit(idx)}>Edit</button>
              </div>
            );
          })}
        </Box>
      </>
    );
  }
}

export default Testfaizan;

