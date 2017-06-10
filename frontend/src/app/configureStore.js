import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {createStore, applyMiddleware} from "redux";

import rootReducer from "./rootReducer";

const loggerMiddleware = createLogger({
    collapsed: true
});


export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
};
