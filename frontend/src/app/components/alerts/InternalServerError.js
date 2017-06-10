import React from "react";


class InternalServerError extends React.Component {
    render() {
        return (
            <div className="alert alert-danger">
                <h4><i className="fa fa-warning"></i> Internal Server Error</h4>
                <p>Oops! Something went wrong. We've been notified and will work
                on fixing this right away.</p>
            </div>
        );
    }
}

export default InternalServerError;
