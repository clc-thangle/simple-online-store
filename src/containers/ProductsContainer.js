import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import Product from './../components/Product'
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from './../actions/index';
import message from '../reducers/message';

class ProductsContainer extends Component {
    
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products){
        var result = null;
        var {onAddToCart,onChangeMessage} = this.props;
        if(products.length>0) {
            result = products.map((product,index) => {
                return <Product key={index} 
                        product={product}
                        onAddToCart={onAddToCart}
                        onChangeMessage={onChangeMessage}
                        />
            });
        }
        // console.log(products.length);
        return result;
    }
}

ProductsContainer.propTypes = { // check prop của product
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            des : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired, // nghĩa là bắt buộc phải có
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

