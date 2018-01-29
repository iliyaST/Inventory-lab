// @flow
import React from 'react';

import ProductItemComponent from './ProductItemComponent';

type Props = {
    name: string
}

type State = {}

class CategoryComponent extends React.Component<Props, State> {

    render() {
        return (
            <div className="category-item-container">

            </div>
        );
    };
}

export default CategoryComponent;