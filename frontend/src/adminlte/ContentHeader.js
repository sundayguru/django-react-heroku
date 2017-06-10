import React from "react";


class ContentHeader extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <section className="content-header">
                {children}
            </section>
        );
    }
}

export default ContentHeader;
