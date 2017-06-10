import React from "react";
import classnames from "classnames";


class Header extends React.Component  {
    render() {
        const props = this.props;

        const classNames = classnames({
            "box-header": true,
            "with-border": props.withBorder
        });

        return (
            <div className={classNames}>
                {props.children}
            </div>
        );
    }
}

Header.defaultProps = {
    withBorder: true
};

export default Header;
