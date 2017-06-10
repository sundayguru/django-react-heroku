import React from "react";

import EmptyComponent from "app/components/EmptyComponent";


export default (Component, permission) => {
    return window.django.user.permissions.has(permission) ? Component : EmptyComponent;
};
