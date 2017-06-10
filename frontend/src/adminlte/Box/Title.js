import React from "react";


class HeaderTitle extends React.Component {
    render() {
        const props = this.props;

        return (
            <h3 className="box-title">{props.children}</h3>
        );
    }
}

export default HeaderTitle;
