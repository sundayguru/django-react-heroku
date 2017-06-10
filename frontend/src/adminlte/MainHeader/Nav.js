import React from "react";


class Nav extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <ul className="nav navbar-nav">
                {children}
            </ul>
        );
    }
}

export default Nav;
