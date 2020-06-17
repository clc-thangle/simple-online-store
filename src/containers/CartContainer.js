import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
class CartContainer extends Component {
    
    render() {
        var {cart} = this.props;
        console.log(cart);
        return(
            <Cart>
                {this.showCartItem(cart)}
            </Cart>
        )
    }

    showCartItem = (cart) => {
        var result = Message.MSG_CART_EMPTY;
        if(cart.length >0) {
            result = cart.map((item,index) =>{
                return(
                    <CartItem 
                    item={item}
                    key={index}/>
                )
            })
        }
        return result;
    }
}

CartContainer.propTypes = { // check prop của product
    cart : PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            des : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired 
    })).isRequired // nghĩa là bắt buộc phải có
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);
