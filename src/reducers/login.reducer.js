import { LOGIN } from './../constants/action.constants';

const initialState = {
    data: {}
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case LOGIN:
            return { ...state, data: actions.data };
        break;
    }
    return state;
}