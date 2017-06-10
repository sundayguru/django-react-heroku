import React from "react";
import classnames from "classnames";


class Tools extends React.Component {
    render() {
        const props = this.props;

        const classNames = classnames({
            "box-tools": true,
            "pull-right": props.pullRight
        });

        return (
            <div className={classNames}>
                {props.children}
            </div>
        );
    }
}

Tools.defaultProps = {
    pullRight: true
};

export default Tools;
