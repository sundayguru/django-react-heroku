import constants from "./constants";


export function controlSidebarToggle() {
    // Because AdminLTE applies classes on <body> and our React application
    // doesn"t manage <body> we have to manipulate it here
    document.body.classList.toggle("control-sidebar-open");

    return {
        type: constants.CONTROL_SIDEBAR_TOGGLE
    };
}

export function mainHeaderUserMenuToggle() {
    return {
        type: constants.MAIN_HEADER_USER_PANEL_TOGGLE
    };
}

export function mainSidebarToggle() {
    // Because AdminLTE applies classes on <body> and our React application
    // doesn"t manage <body> we have to manipulate it here
    document.body.classList.toggle("sidebar-collapse");
    document.body.classList.toggle("sidebar-open");

    return {
        type: constants.MAIN_SIDEBAR_TOGGLE
    };
}

export default {
    controlSidebarToggle,
    mainHeaderUserMenuToggle,
    mainSidebarToggle
};
