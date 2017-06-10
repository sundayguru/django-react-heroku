import React from "react";
import {Link} from "react-router";


class LinkedListGroup extends React.Component {
    render() {
        const {collection} = this.props;

        return (
            <div className="list-group" style={{opacity: collection.isLoading ? 0.5 : 1}}>
                {collection.models.toList().map((model, key) =>
                <Link
                    activeClassName="active"
                    className="list-group-item"
                    key={key}
                    to={model.appUrl()}
                >
                    {model.toString()}
                    <span className="pull-right">
                        <i className="fa fa-fw fa-angle-right"/>
                    </span>
                </Link>
                )}
                {collection.models.size === 0
                    && <div className="list-group-item">No items found.</div>}
            </div>
        );
    }
}

export default LinkedListGroup;
