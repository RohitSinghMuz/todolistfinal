import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoreducer from "./reducers/Todoreducers";

const rootReducer = combineReducers({
    todoreducer: todoreducer,

})

const store = configureStore({
    reducer: rootReducer,
})


export default store;
