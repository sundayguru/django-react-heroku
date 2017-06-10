import React from "react";


class Wrapper extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <header className="main-header">
                {children}
            </header>
        );
    }
}

export default Wrapper;
