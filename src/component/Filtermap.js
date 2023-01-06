import React, { useState } from "react";
import { Data } from "./Data";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Filtermap = () => {
  const [searchName, setsearchName] = useState("");

  const filtername = Data?.filter((filteRName, index) => {
    if (filteRName.name.toLowerCase().includes(searchName.toLowerCase())) {
      return filteRName.name;
    }
  });

  return (
    <>
      <Box sx={{ width: "40%", margin: "10px auto" }}>
        <TextField
          placeholder="EnterName"
          sx={{ width: "250px", margin: "10px auto" }}
          onChange={(e) => setsearchName(e.target.value)}
        />
        {filtername?.length > 0 ? (
          filtername?.map((item, index) => {
            return (
              <Box sx={{ width: "40%", margin: "10px auto" }}>
                <Typography variant="h4">{item.name}</Typography>
              </Box>
            );
          })
        ) : (
          <Typography>Name Not Found</Typography>
        )}
      </Box>
    </>
  );
};

export default Filtermap;
