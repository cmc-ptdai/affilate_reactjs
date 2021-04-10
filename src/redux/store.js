import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducer/index";
import RootReduce from './reducer/index'

const myMiddleware = applyMiddleware(thunk)

const myCompose = compose(
  myMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  RootReducer,
  myCompose
)

export default store
