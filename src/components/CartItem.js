import React, { Component } from 'react';
import { Fragment } from 'react';

class CartItem extends Component {
    render() {
        var {item} = this.props;
        return (
            <Fragment>
                <tr>
                    <th scope="row">
                        <img src={item.product.image}
                            alt={item.product.name} className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{item.product.name}</strong>
                        </h5>
                    </td>
                    <td>{item.product.price}$</td>
                    <td className="center-on-small-only">
                        <span className="qty">{item.quantity}</span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <a>—</a>
                            </label>
                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>{this.showTotalPrice(item.product.price,item.quantity)}$</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                        >
                            X
                        </button>
                    </td>
                </tr>
            </Fragment>
        );
    }

    onDelete = (product) => {
        console.log(product);
        var {onDeleteProductInCart} = this.props;
        onDeleteProductInCart(product);
    }

    showTotalPrice = (price,quantity) => {
        return price*quantity;
    }
}

export default CartItem;