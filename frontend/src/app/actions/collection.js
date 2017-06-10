import {List} from "immutable";

import http from "app/utils/http";
import {addHttpStatusCodeAlert} from "app/actions/alerts";


function collectionIsLoading(collection) {
    const constants = collection.get("constants");
    return {
        type: constants.COLLECTION_IS_LOADING
    };
}

function receivedCollection(collection, data) {
    const constants = collection.get("constants");
    return {
        models: data.models,
        pagination: data.pagination,
        type: constants.RECEIVED_COLLECTION
    };
}

function receivedModel(model, data) {
    const constants = model.get("constants");
    return {
        model: data,
        type: constants.RECEIVED_MODEL
    };
}

function removedModel(model) {
    const constants = model.get("constants");
    return {
        type: constants.REMOVED_MODEL,
        model
    };
}

export function saveModel({model, successCb = List(), errorCb = List(), changeSet}) {
    return (dispatch) => {
        successCb = successCb.concat(
            (response) => dispatch(receivedModel(model, response.body))
        );

        errorCb = errorCb.concat(
            (response) => dispatch(addHttpStatusCodeAlert(response.statusCode)),
        );

        return http.put(model.apiUrl(), changeSet.toJS(), successCb, errorCb);
    };
}

export function createModel({collection, successCb = List(), errorCb = List(), changeSet}) {
    return (dispatch) => {
        successCb = successCb.concat(
            (response) => {
                dispatch(receivedModel(collection, response.body));
            }
        );

        errorCb = errorCb.concat(
            (response) => dispatch(addHttpStatusCodeAlert(response.statusCode)),
        );

        return http.post(collection.apiUrl, changeSet.toJS(), successCb, errorCb);
    };
}

export function fetchModel({model, successCb = List(), errorCb = List()}) {
    return (dispatch) => {
        successCb = successCb.concat(
            (response) => dispatch(receivedModel(model, response.body))
        );

        errorCb = errorCb.concat(
            (response) => dispatch(addHttpStatusCodeAlert(response.statusCode))
        );

        return http.get(model.apiUrl(), {}, successCb, errorCb);
    };
}

export function deleteModel({model, successCb = List(), errorCb = List()}) {
    return (dispatch) => {
        successCb = successCb.concat(
            () => dispatch(removedModel(model))
        );

        errorCb = errorCb.concat(
            (response) => dispatch(addHttpStatusCodeAlert(response.statusCode))
        );

        return http.del(model.apiUrl(), successCb, errorCb);
    };
}

export function fetchCollectionIfEmpty({collection, query}) {
    return (dispatch) => {
        const models = collection.get("models");
        if (models.size === 0) {
            return dispatch(fetchCollection({collection, query}));
        }
    };
}

export function fetchCollection({collection, query, successCb = List(), errorCb = List()}) {
    return (dispatch) => {
        const currentQuery = collection.get("query");

        if ( ! currentQuery.equals(query)) {
            dispatch(updateCollectionQuery({collection, query}));
        }

        dispatch(collectionIsLoading(collection));

        successCb = successCb.concat(
            (response) => dispatch(receivedCollection(collection, response.body))
        );

        errorCb.concat(
            (response) => dispatch(addHttpStatusCodeAlert(response.statusCode))
        );

        return http.get(collection.get("apiUrl"), query.toJS(), successCb, errorCb);
    };
}

export function updateCollectionQuery({collection, query}) {
    const constants = collection.get("constants");
    return {
        query,
        type: constants.UPDATE_COLLECTION_QUERY
    };
}

export default {
    createModel,
    deleteModel,
    fetchCollection,
    fetchCollectionIfEmpty,
    fetchModel,
    saveModel,
    updateCollectionQuery
};
