// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// const Todo = () => {
//   const [name, setname] = useState("");
//   const [isedititem, issetedititem] = useState(null);
//   const [data, setdata] = useState([]);

//   const adddata = () => {
//     let arr = {
//       name,
//     };
//     let newdata = [...data, arr];
//     setdata(newdata);
//     setname('')
//   };
//   // console.log(name, data);
//   const deleteitem = (idx) => {
//     let deldata = data?.filter((item, index) => {
//       return idx !== index;
//     });
//     setdata(deldata);
//   };
//   const edititem = (obj, i) => {
//     issetedititem(i);
//     setname(obj.name);
//   };

//   const editsubmit=()=>{
//       let temp=[...data];
//       temp[isedititem].name=name;
//       setname('');
//   }
//   return (
//     <>
//       <input type="text" onChange={(e) => setname(e.target.value)} />
//       <button onClick={adddata}>Submittdata</button>
//       <button onClick={editsubmit}>Editdata</button>
//       {data?.map((item, idx) => {
//         console.log(item, "item");
//         return (
//           <Box>
//             <Typography onClick={() => edititem(item, idx)}>Edit</Typography>
//             <Typography>{item.name}</Typography>
//             <Typography onClick={() => deleteitem(idx)}>Delete</Typography>
//           </Box>
//         );
//       })}
//     </>
//   );
// };

// export default Todo;

















// // import React, { useState } from "react";
// // import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// // import TextField from "@mui/material/TextField";
// // import Typography from "@mui/material/Typography";
// // import AddIcon from "@mui/icons-material/Add";
// // import CloseIcon from "@mui/icons-material/Close";
// // import EditIcon from "@mui/icons-material/Edit";

// // const App = () => {
// //   const [title, settitle] = useState("");

// //   const [data, setdata] = useState([]);
// //   const [isEditItem, setisEditItem] = useState(null);

// //   const adddata = () => {
// //     let arr = {
// //       title,
// //     };
// //     let newarr = [...data, arr];

// //     setdata(newarr);
// //     settitle("");
// //   };

// //   //    start deleteitem

// //   const deleteitem = (id) => {
// //     console.log("delete", id);
// //     const newTodos = [...data];
// //     const deleteitemdata = newTodos.filter((each) => {
// //       return each.id !== id;
// //     });

// //     setdata(deleteitemdata);
// //   };
// //   const edititem = (obj, i) => {
// //     setisEditItem(i);
// //     settitle(obj.title);
// //   };

// //   // edit submittbutton

// //   const editsubmit = () => {
// //     let temp = [...data];
// //     temp[isEditItem].title = title;
// //     settitle("");
// //   };

// //   const newdata = data.filter((elename) => {
// //     if (elename.title.toLowerCase().includes(title.toLowerCase())) {
// //       return elename.title;
// //     }
// //   });
// //   console.log(newdata, "newdata");
// //   return (
// //     <>
// //       <Box sx={{ display: "flex", width: "30%", margin: "1em auto" }}>
// //         <TextField
// //           onChange={(e) => settitle(e.target.value)}
// //           id="outlined-basic"
// //           placeholder="Enter Title"
// //           value={title}
// //           variant="outlined"
// //         />

// //         <Button onClick={adddata}>
// //           <AddIcon />
// //         </Button>
// //         <Button onClick={editsubmit}>
// //           <EditIcon />
// //         </Button>
// //       </Box>
// //       <Box>
// //         {newdata?.map((item, index) => {
// //           return (
// //             <Box
// //               key={index}
// //               sx={{ display: "flex", width: "30%", margin: "1em auto" }}
// //             >
// //               <Typography
// //                 sx={{ margin: "1em" }}
// //                 onClick={() => edititem(item, index)}
// //               >
// //                 <EditIcon />
// //               </Typography>
// //               <Typography sx={{ margin: "1em" }}>{item.title}</Typography>
// //               <Typography
// //                 sx={{ margin: "1em" }}
// //                 onClick={() => deleteitem(item.id)}
// //               >
// //                 <CloseIcon />
// //               </Typography>
// //             </Box>
// //           );
// //         })}
// //       </Box>
// //     </>
// //   );
// // };

// // export default App;

// import React from "react";
// import Todo from "./Todo";

// const App = () => {
//   return (
//     <>
//       <Todo/>
//     </>
//   );
// };

// export default App;

