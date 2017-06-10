import {createSelector} from "reselect";

import viewportDimensions from "app/utils/viewportDimensions";

const adminlteSelector = (state, props) => {
    return props.adminlte;
};

const contentWrapperMinHeight = createSelector(
    adminlteSelector,
    (adminlte) => {
        const dimensions = viewportDimensions();
        const mainFooter = adminlte.mainFooter;
        const mainHeader = adminlte.mainHeader;

        const minHeight = dimensions.height - (
            mainHeader.get("height") + mainFooter.get("height")
        );

        return {
            contentWrapperMinHeight: minHeight
        };
    }
);

export {
    contentWrapperMinHeight
};
