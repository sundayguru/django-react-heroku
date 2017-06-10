import React from "react";
import moment from "moment";


class Model extends React.Component {
    render() {
        const {model} = this.props;

        return (
            <dl className="dl-horizontal">
                <dt className="text-muted">Id</dt>
                <dd>{model.id}</dd>

                <dt className="text-muted">First Name</dt>
                <dd>{model.first_name}</dd>

                <dt className="text-muted">Last Name</dt>
                <dd>{model.last_name}</dd>

                <dt className="text-muted">Email</dt>
                <dd><a href={`mailto:${model.email}`}>{model.email}</a></dd>

                <dt className="text-muted">Date Joined</dt>
                <dd>{moment(model.date_joined).format("ddd. MMM. Do YYYY, h:mm A")}</dd>

                <dt className="text-muted">Last Login</dt>
                <dd>{moment(model.last_login).format("ddd. MMM. Do YYYY, h:mm A")}</dd>

                <dt className="text-muted">Last Updated</dt>
                <dd>{moment(model.last_updated).format("ddd. MMM. Do YYYY, h:mm:s A")}</dd>
            </dl>
        );
    }
}

export default Model;
