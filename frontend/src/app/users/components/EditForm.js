import React from "react";
import {Input} from "react-bootstrap";

import edit from "app/components/higherOrder/edit";
import hasPermission from "app/components/higherOrder/hasPermission";


class Form extends React.Component {
    render() {
        const {changeSet, handleChange, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Input
                    bsStyle={changeSet._errors.first_name ? "error" : null}
                    hasFeedback
                    help={changeSet._errors.first_name}
                    label="First Name"
                    name="first_name"
                    type="text"
                    onChange={handleChange}
                    value={changeSet.first_name}
                    help={changeSet._errors.first_name}
                />
                <Input
                    bsStyle={changeSet._errors.last_name ? "error" : null}
                    hasFeedback
                    help={changeSet._errors.last_name}
                    label="Last Name"
                    name="last_name"
                    type="text"
                    onChange={handleChange}
                    value={changeSet.last_name}
                />
                <Input
                    autoComplete="off"
                    bsStyle={changeSet._errors.email ? "error" : null}
                    hasFeedback
                    help={changeSet._errors.email}
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={changeSet.email}
                />
                <button type="submit" className="hidden"/>
            </form>
        );
    }
}

export default hasPermission(edit(Form), "users.change_emailuser");
