import React from "react";


class Content extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <section className="content">
                {children}
            </section>
        );
    }
}

export default Content;
