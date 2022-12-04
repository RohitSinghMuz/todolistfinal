import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Todofun = () => {
  const [title, settitle] = useState("");
  const [data, setdata] = useState([]);
  const [isEditItem, setisEditItem] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const adddata = () => {
    let arr = {
      title,
    };
    let newarr= [...data, arr];

    setdata(newarr);
  };

  //    start deleteitem

  const deleteitem = (id) => {
    console.log("delete", id);
    const newTodos= [...data];
    const deleteindex = newTodos.findIndex((each) => {
      return each.id === id;
    });

    newTodos.splice(deleteindex, 1);
    setdata(newTodos);
  };
  const edititem = (obj, i) => {
    setOpen(true);
    setisEditItem(i);
    settitle(obj.title);
  };

  // edit submittbutton

  const editclosebutton = () => {
    let temp = [...data];

    temp[isEditItem].title = title;
    setOpen(false);
    settitle(temp);
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "30%", margin: "1em auto" }}>
        <TextField
          onChange={(e) => settitle(e.target.value)}
          id="outlined-basic"
          placeholder="Enter Title"
          value={title}
          variant="outlined"
        />

        <Button onClick={adddata}>ADD Data</Button>
      </Box>
      <Box>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{ display: "flex", width: "30%", margin: "1em auto" }}
            >
              <Typography
                sx={{ margin: "1em" }}
                onClick={() => edititem(item, index)}
              >
                EDIT
              </Typography>
              <Typography sx={{ margin: "1em" }}>{item.title}</Typography>
              <Typography
                sx={{ margin: "1em" }}
                onClick={() => deleteitem(item.id)}
              >
                DELETE
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* start modal */}

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField
            onChange={(e) => settitle(e.target.value)}
            id="outlined-basic"
            placeholder="Enter Title"
            value={title}
            variant="outlined"
          />
          <Button onClick={editclosebutton}>Submitt</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Todofun;
