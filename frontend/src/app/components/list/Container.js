import React from "react";
import {Col, Row} from "react-bootstrap";

import Box from "./Box";


class Container extends React.Component {
    componentWillMount() {
        const {actions, collection} = this.props;
        const query = collection.get("query");
        actions.fetchCollectionIfEmpty({collection, query});
    }

    render() {
        const {children, rowOneWidth = 4, rowTwoWidth = 8} = this.props;

        return (
            <Row>
                <Col sm={rowOneWidth}>
                    <Box {...this.props}/>
                </Col>
                <Col sm={rowTwoWidth}>
                    {children}
                </Col>
            </Row>
        );
    }
}

export default Container;
