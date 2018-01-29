// @flow
import React from 'react';

type Props = {
    name: string,
    img: any,
    quantity: number
}

type State = {}

class ProductItemComponent extends React.Component<Props, State> {

    render() {
        return (
            <div className="product-item-container">
                <img src={this.props.img} className="product-img" />
                <label className="product-name">{this.props.name}</label>
                <label className="product-quantity">{this.props.quantity}</label>
            </div>
        );
    };
}

export default ProductItemComponent;