/**
 * Created by uttam on 11/12/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ServerRoot from '../common/config';

import { Actions } from './meta/actions';

class ConnectionWrapper extends React.PureComponent {
    static defaultHandler(data) {
        console.log(`undefined type ${data.type}`);
        return undefined;
    }

    constructor(props) {
        super(props);
        this.connect = this.connect.bind(this);
    }

    componentDidMount() {
        document.addEventListener('contextmenu', event => event.preventDefault());
        this.connect();
    }

    connect() {
        const { token, dispatch } = this.props;
        const url = `ws://${ServerRoot}/livetrading/websocket?token=${token}`;
        dispatch(Actions.connect(url));
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

ConnectionWrapper.defaultProps = {
    token: undefined,
};

ConnectionWrapper.propTypes = {
    token: PropTypes.string,
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(ConnectionWrapper);
