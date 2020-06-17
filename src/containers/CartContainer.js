import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CartContainer extends Component {
    
    render() {
        var {cart} = this.props;
        console.log(cart);
        return(
            <div></div>
        )
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

