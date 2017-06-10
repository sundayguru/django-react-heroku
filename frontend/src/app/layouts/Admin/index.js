import React from "react";
import actions from "adminlte/actions";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {bindActionCreators} from "redux";
import {Content, ContentWrapper, ControlSidebar, Wrapper} from "adminlte";

import MainFooter from "./MainFooter";
import MainSidebar from "./MainSidebar";
import MainHeader from "./MainHeader";


class Admin extends React.Component {
    componentWillMount() {
        const {adminlte} = this.props;
        const classNames = adminlte.body.get("classNames");
        document.body.className = classNames.join(" ");
    }

    render() {
        const {adminlte, actions, alerts, children} = this.props;

        return (
            <Wrapper>
                <MainHeader actions={actions} adminlte={adminlte}/>
                <MainSidebar/>
                <ContentWrapper adminlte={adminlte}>
                    <Content>
                        {alerts.toList().map((Alert, key) => <Alert key={key}/>)}
                        {children}
                    </Content>
                </ContentWrapper>
                <MainFooter/>
                <ControlSidebar adminlte={adminlte}/>
            </Wrapper>
        );
    }
}

const selector = createSelector(
    (state) => state.adminlte,
    (state) => state.alerts,
    (adminlte, alerts) => {
        return {
            adminlte,
            alerts
        };
    }
);

const bindActions = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)};
};

export default connect(selector, bindActions)(Admin);
