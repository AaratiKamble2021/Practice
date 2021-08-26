// import { createStore } from 'redux';
// import { install } from 'redux-loop';
// import reducer,{initialState } from './reducer';

// export const store = createStore(reducer, initialState, install());

import { createStore ,compose,applyMiddleware} from "redux";
import { initialState } from "./reducer";
import rootReducer from "../Reducers";
import { install } from 'redux-loop';
import thunk from 'redux-thunk'

// import {persistStore, persistReducer} from "redux-persist";

const enhancer = compose(
    // applyMiddleware(thunk),
    install(),
    applyMiddleware(thunk),
);

const store =createStore(rootReducer,enhancer);
// let persistor = persistStore(store)

export {store}