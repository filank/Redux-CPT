import { createStore, applyMiddleware } from "redux";
import CounterReducer from "../Reducers/CounterReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = createStore(CounterReducer, applyMiddleware(logger));
export default store;
