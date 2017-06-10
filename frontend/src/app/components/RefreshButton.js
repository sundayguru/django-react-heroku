import React from "react";


class RefreshButton extends React.Component {
    handleClick = () => {
        const {actions, collection} = this.props;
        const {router} = this.context;
        const query = collection.get("query");
        actions.fetchCollection({collection, query});
        router.push(collection.appUrl());
    };

    render() {
        return (
            <a className="btn btn-app"
                onClick={this.handleClick}
                title="Refresh your search"
            >
                <i className="fa fa-refresh"/> Refresh
            </a>
        );
    }
}

RefreshButton.contextTypes = {
    router: React.PropTypes.object
};

export default RefreshButton;
