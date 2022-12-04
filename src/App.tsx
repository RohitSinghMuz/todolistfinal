import React from "react";
import Todo from "./component/Todo";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todofun from "./Todofun";
import Testtodofun from "./Testtodofun";

const App = () => {
  return (
    <>
      {/* 
<Provider store={store}>
<Todo/>
    </Provider> */}

      {/* <Todofun/> */}
      <Testtodofun/>
    </>
  );
};

export default App;
