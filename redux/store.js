import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import { rootReducer } from "./reducers";


// const useReduxLogger = process.env.USE_REDUX_LOGGER

const combinedReducer = rootReducer
const middleware = [thunk]



export const store = configureStore({
    reducer: combinedReducer,
    middleware
});

export default store