import React from "react";
import classnames from "classnames";


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        const {collection} = props;
        this.state = {query: collection.get("query")};
    }

    componentWillReceiveProps(nextProps) {
        const {props} = this;
        const query = nextProps.collection.get("query");

        if(props.collection.get("query") !== query) {
            this.setState({query});
        }
    }

    handleClear = () => {
        const {actions, collection, params} = this.props;
        const {router} = this.context;
        let query = collection.get("query");

        query = query.withMutations((map) => {
            map.set("page", 1);
            map.set("search", "");
        });

        this.setState({query});
        actions.fetchCollection({collection, query});
        router.push(collection.appUrl(params));
    };

    handleSubmit = (evnt) => {
        const {actions, collection, params} = this.props;
        const {router} = this.context;
        let {query} = this.state;

        query = query.set("page", 1);
        evnt.preventDefault();
        actions.fetchCollection({collection, query});
        router.replace(collection.appUrl(params));
    };

    handleChange = (evnt) => {
        let {query} = this.state;
        query = query.set("search", evnt.target.value);
        this.setState({query});
    };

    render() {
        const {autoFocus = false, width = "150px"} = this.props;
        const {query} = this.state;
        const search = query.get("search");

        const submitButton = classnames({
            "btn": true,
            "btn-default": true,
            "hide": search.length !== 0
        });

        const clearButton = classnames({
            "btn": true,
            "btn-default": true,
            "hide": search.length === 0
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <div
                    className="input-group input-group-sm"
                    style={{width}}
                >
                    <input
                        autoFocus={autoFocus}
                        className="form-control pull-right"
                        name="search"
                        onChange={this.handleChange}
                        placeholder="Search"
                        type="text"
                        value={search}
                    />
                    <div className="input-group-btn">
                        <button
                            className={submitButton}
                            type="submit"
                        >
                            <i className="fa fa-search"/>
                        </button>

                        <button
                            onClick={this.handleClear}
                            className={clearButton}
                            type="button"
                        >
                            <i className="fa fa-times"/>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

SearchBox.contextTypes = {
    router: React.PropTypes.object
};

export default SearchBox;
