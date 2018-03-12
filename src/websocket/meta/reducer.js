/**
 * Created by uttam on 1/31/18.
 */
import { ActionTypes } from './actions';

const reducer = (state = { connected: false }, action) => {
    if (action.type === ActionTypes.CONNECTED) {
        return { ...state, connected: true };
    }
    if (action.type === ActionTypes.DISCONNECTED) {
        return { ...state, connected: false };
    }
    return state;
};

export default reducer;
