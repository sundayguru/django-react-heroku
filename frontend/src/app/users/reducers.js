import collectionReducer from "app/reducers/collection";

import {Collection} from "./models";

const initialState = new Collection();


function reducer(state = initialState, action) {
    return collectionReducer(state, action, state.constants);
}

export default reducer;
