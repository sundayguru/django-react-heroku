import React from "react";
import {Button, Modal} from "react-bootstrap";
import {List} from "immutable";


export default (Component) => {
    class QueryForm extends React.Component {
        constructor(props) {
            super(props);
            const {collection} = props;

            this.state = {
                show: false,
                query: collection.get("query")
            };
        }

        componentWillReceiveProps(nextProps) {
            const {props} = this;
            const query = nextProps.collection.get("query");

            if(props.collection.get("query") !== query) {
                this.setState({query});
            }
        }

        showModal = () => {
            this.setState({show: true});
        }

        hideModal = () => {
            this.setState({show: false});
        }

        handleChange = (evnt) => {
            let {query} = this.state;
            query = query.set(evnt.target.name, evnt.target.value);
            this.setState({query});
        }

        handleClear = () => {
            const {actions, collection} = this.props;
            const {router} = this.context;
            const successCb = List([() => this.hideModal()]);
            let query = collection.get("query");

            query = query.withMutations((map) => {
                map.clear();
                map.set("search", query.get("search"));
                map.set("page", 1);
            });

            actions.fetchCollection({collection, query, successCb});
            router.push(collection.appUrl());
        };

        handleSubmit = (evnt) => {
            const {actions, collection} = this.props;
            const {router} = this.context;
            const {query} = this.state;
            const successCb = List([() => this.hideModal()]);

            evnt.preventDefault();
            actions.fetchCollection({collection, query, successCb});
            router.push(collection.appUrl());
        }

        render() {
            const {collection} = this.props;
            const {query} = this.state;

            return(
                <a className="btn btn-app" onClick={this.showModal}>
                    {collection.isFilterActive() &&
                        <span className="badge bg-teal">
                            <i className="fa fa-asterisk"/>
                        </span>
                    }
                    <i className="fa fa-filter"></i> Filters
                    <Modal
                        onHide={this.hideModal}
                        show={this.state.show}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{collection.title} Filters</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Component
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                query={query}
                                {...this.props}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="pull-left"
                                onClick={this.hideModal}>Cancel
                            </Button>
                            <Button onClick={this.handleClear}>Clear</Button>
                            <Button onClick={this.handleSubmit}>Go!</Button>
                        </Modal.Footer>
                    </Modal>
                </a>
            );
        }
    }

    QueryForm.contextTypes = {
        router: React.PropTypes.object
    };

    return QueryForm;
};
