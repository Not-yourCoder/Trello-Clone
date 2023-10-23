import thunk from "redux-thunk";
import { todoReducer } from "./reducers";
import middlewares from "./middleware";
import {configureStore, MiddlewareArray} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: todoReducer,
    middleware: new MiddlewareArray().concat(middlewares).concat(thunk),
    devTools: true
});

export default store;
