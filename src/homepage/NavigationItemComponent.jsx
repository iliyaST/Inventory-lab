// @flow
import React from 'react';

type Props = {
    content: string
}

type State = {}

class NavigationItemComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className="navigation-item">
                {this.props.content}
            </div>
        );
    }
}

export default NavigationItemComponent;