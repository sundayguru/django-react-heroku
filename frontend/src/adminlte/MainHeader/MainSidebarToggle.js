import React from "react";


class MainSidebarToggle extends React.Component {
    render() {
        const {actions} = this.props;

        return (
            <button onClick={actions.mainSidebarToggle} className="btn sidebar-toggle">
                <span className="sr-only">Toggle navigation</span>
            </button>
        );
    }
}

export default MainSidebarToggle;
