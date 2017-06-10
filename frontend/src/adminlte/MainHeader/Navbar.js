import React from "react";


class Navbar extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <nav className="navbar navbar-static-top">
                {children}
            </nav>
        );
    }
}

export default Navbar;
