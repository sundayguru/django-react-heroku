import React from "react";


export default function UserPanel() {
    return (
        <div className="user-panel">
            <div className="pull-left image">
                <img
                    src="/adminlte/img/user2-160x160.jpg"
                    className="img-circle"
                    alt="User Image"
                />
            </div>
            <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
    );
}
