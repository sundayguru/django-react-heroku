import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {Tab, Tabs} from "react-bootstrap";

import actions from "app/actions/collection";
import findModel from "app/components/higherOrder/findModel";


class Container extends React.Component {
    componentWillMount() {
        const {props} = this;
        this.setState({activeKey: props.children.props.route.path});
    }

    componentWillReceiveProps(nextProps) {
        const {props} = this;

        if (
            (props.params.user !== nextProps.params.user) &&
            (props.children.props.route.path !== nextProps.children.props.route.path)
        ) {
            const {model} = nextProps;
            const {router} = this.context;
            const activeKey = nextProps.children.props.route.path;
            router.push(model.tabUrl(activeKey));
            this.setState({activeKey});
        }
    }

    handleSelect = (activeKey) => {
        const {model} = this.props;
        const {router} = this.context;
        router.push(model.tabUrl(activeKey));
        this.setState({activeKey});
    };

    render() {
        const {children, model} = this.props;
        const {activeKey} = this.state;

        return (
            <Tabs
                animation={false}
                activeKey={activeKey}
                className="nav-tabs-custom"
                onSelect={this.handleSelect}
            >
                <Tab
                    disabled={true}
                    tabClassName="pull-left header"
                    title={model.toString()}
                />
                <Tab
                    eventKey="details"
                    tabClassName="pull-right"
                    title="Details"
                >
                    {activeKey === "details" && children}
                </Tab>
            </Tabs>
        );
    }
}

Container.contextTypes = {
    router: React.PropTypes.object
};

const selector = createSelector(
    (state) => state.users,
    (collection) => {
        return {
            collection
        };
    }
);

const bindActions = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)};
};

export default connect(selector, bindActions)(findModel(Container));
