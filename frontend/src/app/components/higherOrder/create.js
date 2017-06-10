import React from "react";
import {Button, Modal} from "react-bootstrap";
import {List} from "immutable";


export default (Component) => {
    class CreateForm extends React.Component {
        constructor(props) {
            super(props);
            const {collection} = props;

            this.state = {
                show: false,
                changeSet: new collection.ChangeSet()
            };
        }

        showModal = () => {
            this.setState({show: true});
        }

        hideModal = () => {
            const {changeSet} = this.state;

            this.setState({
                show: false,
                changeSet: changeSet.clear()
            });
        }

        handleChange = (evnt) => {
            const {changeSet} = this.state;

            this.setState({
                changeSet: changeSet.set(evnt.target.name, evnt.target.value)
            });
        }

        handleSubmit = (evnt) => {
            const {actions, collection} = this.props;
            const {changeSet} = this.state;
            const {router} = this.context;

            const successCb = List([
                () => this.hideModal(),
                (response) => {
                    const Model = collection.get("Model");
                    const model = new Model(response.body);
                    this.setState({changeSet: changeSet.clear()});
                    router.push(model.appUrl());
                }
            ]);

            const errorCb = List([
                (response) => this.setState({
                    changeSet: changeSet.set("_errors", response.body)
                })
            ]);

            evnt.preventDefault();
            actions.createModel({collection, successCb, errorCb, changeSet});
        }

        render() {
            const {collection} = this.props;
            const {changeSet} = this.state;

            return(
                <a className="btn btn-app" onClick={this.showModal}>
                    <i className="fa fa-plus"></i> Create
                    <Modal
                        onHide={this.hideModal}
                        show={this.state.show}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Create {collection.titleSingular}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Component
                                changeSet={changeSet}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                {...this.props}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="pull-left"
                                onClick={this.hideModal}>Cancel
                            </Button>
                            <Button onClick={this.handleSubmit}>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </a>
            );
        }
    }

    CreateForm.contextTypes = {
        router: React.PropTypes.object
    };

    return CreateForm;
};
