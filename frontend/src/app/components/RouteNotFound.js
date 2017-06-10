import React from "react";

import history from "app/history";


class RouteNotFound extends React.Component {
    render() {
        return(
            <div className="error-page">
                <h2 className="headline text-yellow"> 404</h2>
                <div className="error-content">
                    <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>

                    <p className="text-center">
                        We could not find the page you were looking for.
                    </p>

                    <a
                        className="btn btn-default cursor-pointer"
                        onClick={history.goBack}
                    >
                        Go Back
                    </a>
                </div>
            </div>
        );
    }
}

export default RouteNotFound;
