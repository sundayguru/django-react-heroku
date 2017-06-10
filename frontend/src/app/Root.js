import React from "react";
import {Provider} from "react-redux";
import {Router} from "react-router";

import stylesheets from "app/stylesheets/index.less"; //eslint-disable-line no-unused-vars
import configureStore from "app/configureStore";
import history from "app/history";
import urls from "app/urls";

const store = configureStore();


class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {urls}
                </Router>
            </Provider>
        );
    }
}

export default Root;
