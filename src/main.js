import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from "./components/App"
import { getQuestions } from "./actions"
import "./styles/index.css";
import questionsApp from './reducers/questions'

let store = createStore(
    questionsApp,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(getQuestions())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);