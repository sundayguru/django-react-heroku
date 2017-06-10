import {Map} from "immutable";
import _ from "lodash";


function reducer(state, action, constants) {
    switch (action.type) {
    case constants.COLLECTION_IS_LOADING:
        return state.set("isLoading", true);

    case constants.RECEIVED_COLLECTION:
        return state.withMutations((collection) => {
            const Model = collection.get("Model");
            const models = _.map(action.models, (data) => new Model(data));

            collection.set("models", Map(_.indexBy(models, "id")));
            collection.set("isLoading", false);
            collection.set("pagination",  action.pagination);
        });

    case constants.RECEIVED_MODEL:
        const Model = state.get("Model");
        const model = new Model(action.model);
        const models = state.get("models");
        // The above call to _.indexBy creates keys that are strings. If we don't
        // call .toString() here our key is an integer and a duplicate model
        // gets added to the Map.
        return state.set("models", models.set(model.id.toString(), model));

    case constants.REMOVED_MODEL:
        return state.withMutations((collection) => {
            const models = collection.get("models");
            const pagination = collection.get("pagination");
            const key = action.model.id.toString();

            pagination.total_entries--;
            collection.set("models", models.delete(key));
        });

    case constants.UPDATE_COLLECTION_QUERY:
        return state.set("query", action.query);

    default:
        return state;
    }
}

export default reducer;
