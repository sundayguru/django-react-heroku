import React from "react";
import {Col, Pagination, Row} from "react-bootstrap";

import PaginationInfo from "app/components/PaginationInfo";


class GenericPagination extends React.Component {
    handleSelect = (evnt, selectedEvent) => {
        const {actions, collection, params} = this.props;
        const {router} = this.context;
        const query = collection.get("query").set("page", selectedEvent.eventKey);

        actions.fetchCollection({collection, query});
        router.push(collection.appUrl(params));
    };

    render() {
        const {collection} = this.props;

        return (
            <Row className="text-center">
                <Col xs={12}>
                    <PaginationInfo {...this.props}/>
                </Col>
                <Col xs={12}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis={false}
                        activePage={collection.pagination.page}
                        items={collection.pagination.total_pages}
                        maxButtons={3}
                        onSelect={this.handleSelect}
                    />
                </Col>
            </Row>
        );
    }
}

GenericPagination.contextTypes = {
    router: React.PropTypes.object
};

export default GenericPagination;
