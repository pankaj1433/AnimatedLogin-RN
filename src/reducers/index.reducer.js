import { combineReducers } from 'redux';

import LoginReducer from './login.reducer';

let appStore = combineReducers({
    login: LoginReducer
});

export default appStore;