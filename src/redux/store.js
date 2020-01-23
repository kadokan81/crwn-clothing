import { createStore } from "redux";
import rootReduser from "./root-reduser";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(rootReduser, applyMiddleware(...middlewares))

export default store;