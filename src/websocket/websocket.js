/**
 * Created by uttam on 2/4/18.
 */

import ActionMap from './ActionMap';
import isDefined from '../common/utils';
import { Actions, ActionTypes } from './meta/actions';

const connect = store => (url) => {
    const connection = new WebSocket(url);
    connection.onopen = () => {
        store.dispatch(Actions.connected());
    };

    connection.onerror = () => {
        connection.close();
    };

    const defaultHandler = (data) => {
        console.log(`undefined type ${data.type}`);
        return undefined;
    };

    connection.onclose = (event) => {
        console.log('closed ws', event.code, event.reason, event.wasClean);
        store.dispatch(Actions.disconnected());
        setTimeout(() => store.dispatch(Actions.connect(url)), 2000);
    };

    connection.onmessage = (evt) => {
        const { data } = evt;
        const dataJs = JSON.parse(data);
        const { [dataJs.type]: handler = defaultHandler } = ActionMap;
        const action = handler(dataJs.data);
        if (isDefined(action)) {
            store.dispatch(action);
        }
    };
    return connection;
};

const websocket = function (store) {
    const connector = connect(store);
    let connection;
    return next => (action) => {
        const { type } = action;
        if (type === ActionTypes.CONNECT) {
            connection = connector(action.url);
        }
        if (type === ActionTypes.DISCONNECTED) {
            console.log('disonne');
        }
        if (type === ActionTypes.SEND_MESSAGE) {
            const { message } = action;
            connection.send(JSON.stringify(message));
            return '';
        }
        return next(action);
    };
};

export default websocket;

