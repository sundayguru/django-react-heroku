import React from "react";


class ControlSidebarToggle extends React.Component {
    render() {
        const {actions} = this.props;

        return (
            <button
                onClick={actions.controlSidebarToggle}
                className="btn sidebar-toggle"
            >
                <span className="sr-only">Toggle navigation</span>
            </button>
        );
    }
}

export default ControlSidebarToggle;
