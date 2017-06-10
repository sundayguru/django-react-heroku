import {OrderedSet} from "immutable";

import * as alerts from "app/constants/alerts";

const initialState = OrderedSet();


function reducer(state = initialState, action) {
    switch (action.type) {
    case alerts.ADD_ALERT:
        return state.add(action.component);

    default:
        return state;
    }
}

export default reducer;
