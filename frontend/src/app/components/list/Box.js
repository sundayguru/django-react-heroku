import React from "react";
import {Box} from "adminlte";

import LinkedListGroup from "app/components/LinkedListGroup";
import Pagination from "app/components/Pagination";
import RefreshButton from "app/components/RefreshButton";
import SearchBox from "app/components/SearchBox";


class MasterBox extends React.Component {
    render() {
        const {collection, CreateForm, QueryForm} = this.props;

        return (
            <Box.Wrapper>
                <Box.Header>
                    <Box.Title>{collection.title}</Box.Title>
                    <Box.Tools>
                        <SearchBox {...this.props}/>
                    </Box.Tools>
                </Box.Header>
                <Box.Body>
                    <LinkedListGroup {...this.props}/>
                    <div className="text-center">
                        <CreateForm {...this.props}/>
                        <RefreshButton {...this.props}/>
                        <QueryForm {...this.props}/>
                    </div>
                    <Pagination {...this.props}/>
                </Box.Body>
            </Box.Wrapper>
        );
    }
}

export default MasterBox;
