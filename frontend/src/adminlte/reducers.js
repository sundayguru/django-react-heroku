import constants from "./constants";
import {AdminLTE} from "./model";

const adminlte = new AdminLTE();

function reducer(state = adminlte, action) {
    switch (action.type) {
    case constants.CONTROL_SIDEBAR_TOGGLE:
        return state.setIn(
            ["controlSidebar", "classNames", "control-sidebar-open"],
            ! state.getIn(["controlSidebar", "classNames", "control-sidebar-open"])
        );

    case constants.MAIN_HEADER_USER_PANEL_TOGGLE:
        return state.setIn(
            ["mainHeader", "userPanel", "collapsed"],
            ! state.getIn(["mainHeader", "userPanel", "collapsed"])
        );

    case constants.MAIN_SIDEBAR_TOGGLE:
        return state.setIn(
            ["mainSidebar", "collapsed"],
            ! state.getIn(["mainSidebar", "collapsed"])
        );

    default:
        return state;
    }
}

export default reducer;
