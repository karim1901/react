import { applyMiddleware, combineReducers, createStore } from "redux";

import { productsReducer } from "./reducer/productsReducer";
import {thunk} from "redux-thunk";



export const store = createStore(combineReducers({
    productsR : productsReducer 
}),applyMiddleware(thunk))