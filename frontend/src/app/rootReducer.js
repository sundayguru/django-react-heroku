import {combineReducers} from "redux";

import adminlte from "adminlte/reducers";
import alerts from "app/reducers/alerts";
import users from "app/users/reducers";


export default combineReducers({
    adminlte,
    alerts,
    users
});
