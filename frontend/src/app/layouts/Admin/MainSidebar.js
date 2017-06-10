import React from "react";
import {MainSidebar} from "adminlte";

const {Menu, Wrapper} = MainSidebar;


class LeftSidebar extends React.Component {
    render() {
        return (
            <Wrapper>
                <Menu />
            </Wrapper>
        );
    }
}

export default LeftSidebar;
