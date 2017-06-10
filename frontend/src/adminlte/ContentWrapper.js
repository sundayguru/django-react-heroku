import React from "react";
import {connect} from "react-redux";

import {contentWrapperMinHeight} from "./selectors";


class ContentWrapper extends React.Component {
    render() {
        const {children, contentWrapperMinHeight} = this.props;

        return (
            <div
                style={{"minHeight": contentWrapperMinHeight}}
                className="content-wrapper"
            >
                {children}
            </div>
        );
    }
}

export default connect(contentWrapperMinHeight)(ContentWrapper);
