import React from "react";
import _ from "lodash";
import {Link} from "react-router";


const allLinks = [
    {
        permission: "users.view_emailuser",
        text: "Users",
        to: "/admin/users/",
        icon: "fa fa-users"
    }
];

const userLinks = _.filter(allLinks, (link) => {
    return window.django.user.permissions.has(link.permission);
});


export default class Menu extends React.Component {
    render() {
        return (
            <section className="sidebar">
                <ul className="sidebar-menu">
                    <li className="header text-center">MENU</li>
                    {_.map(userLinks, (link, key) => 
                        <li key={key}>
                            <Link to={link.to}>
                                <i className={link.icon}/>
                                <span>{link.text}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </section>
        );
    }
}
