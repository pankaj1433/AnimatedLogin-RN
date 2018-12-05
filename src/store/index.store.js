import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './../reducers/index.reducer';

let initialState = {};
let store = createStore(
    rootReducer,
    applyMiddleware(
        thunk
    )
);

export default store;