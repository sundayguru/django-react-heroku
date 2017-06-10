import React from "react";

export default (Component) => class FindModel extends React.Component {
    componentWillMount() {
        const {collection, params} = this.props;
        const id = params[collection.get("routeId")];
        const models = collection.get("models");

        if ( ! models.has(id)) {
            const {actions} = this.props;
            const Model = collection.get("Model");
            actions.fetchModel({model: new Model({id})});
        }
    }

    render() {
        const {collection, params} = this.props;
        const id = params[collection.get("routeId")];
        const Model = collection.get("Model");
        const models = collection.get("models");
        const model = models.get(id, new Model());

        return (
            <Component
                {...this.props}
                model={model}
            />
        );
    }
};
