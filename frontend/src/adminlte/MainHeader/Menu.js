import React from "react";


class Menu extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="navbar-custom-menu">
                {children}
            </div>
        );
    }
}

export default Menu;
