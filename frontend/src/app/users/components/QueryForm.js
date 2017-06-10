import React from "react";
import {Input} from "react-bootstrap";

import query from "app/components/higherOrder/query";


class Form extends React.Component {
    render() {
        const {handleChange, handleSubmit, query} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Input
                    autoComplete="off"
                    autoFocus={true}
                    label="First Name"
                    onChange={handleChange}
                    name="first_name"
                    type="text"
                    value={query.get("first_name")}
                />
                <Input
                    autoComplete="off"
                    label="Last Name"
                    onChange={handleChange}
                    name="last_name"
                    type="text"
                    value={query.get("last_name")}
                />
                <input type="submit" className="hidden"/>
            </form>
        );
    }
}

export default query(Form);
