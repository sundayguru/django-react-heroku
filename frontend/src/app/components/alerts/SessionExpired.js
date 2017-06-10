import React from "react";


class SessionExpired extends React.Component {
    handleClick = () => {
        window.location.reload();
    };

    render() {
        return (
            <div className="alert alert-warning">
                <h4><i className="icon fa fa-warning"></i> Session Expired</h4>
                <p>
                    <a
                        className="cursor-pointer"
                        onClick={this.handleClick}
                    >
                        Login
                    </a> to continue.
                </p>
            </div>
        );
    }
}

export default SessionExpired;
