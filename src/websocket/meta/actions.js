/**
 * Created by uttam on 1/31/18.
 */
import prefixActions from '../../utils/util';

const ActionTypes = {
    CONNECT: 0,
    CONNECTED: 0,
    DISCONNECTED: 0,
    SEND_MESSAGE: 0,
};

prefixActions(ActionTypes, __filename);

const Actions = {
    connect: url => ({
        type: ActionTypes.CONNECT,
        url,
    }),
    connected: () => ({
        type: ActionTypes.CONNECTED,
    }),
    disconnected: () => ({
        type: ActionTypes.DISCONNECTED,
    }),
    sendMessage: message => ({
        type: ActionTypes.SEND_MESSAGE,
        message,
    }),
};

export { ActionTypes, Actions };
