import React from "react";


export default class Wrapper extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="wrapper">
                {children}
            </div>
        );
    }
}
