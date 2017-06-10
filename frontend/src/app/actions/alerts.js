import * as alerts from "app/constants/alerts";
import * as http from "app/constants/http";
import EmptyComponent from "app/components/EmptyComponent";
import InternalServerError from "app/components/alerts/InternalServerError";
import SessionExpired from "app/components/alerts/SessionExpired";


function httpStatusCodeComponentLookup(statusCode) {
    switch (statusCode) {
    case http.HTTP_403_FORBIDDEN:
        return SessionExpired;
    case http.HTTP_500_INTERNAL_SERVER_ERROR:
        return InternalServerError;
    default:
        return EmptyComponent;
    }
}

function addHttpStatusCodeAlert(statusCode) {
    const component = httpStatusCodeComponentLookup(statusCode);

    return {
        type: alerts.ADD_ALERT,
        component
    };
}

export {
    addHttpStatusCodeAlert
};
