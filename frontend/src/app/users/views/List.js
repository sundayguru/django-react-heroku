import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import actions from "app/actions/collection";
import Container from "app/components/list/Container";
import CreateForm from "app/users/components/CreateForm";
import QueryForm from "app/users/components/QueryForm";


const selector = createSelector(
    (state) => state.users,
    (collection) => {
        return {
            collection,
            CreateForm,
            QueryForm
        };
    }
);

const bindActions = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)};
};

export default connect(selector, bindActions)(Container);
