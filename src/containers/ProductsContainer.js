import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';

class ProductsContainer extends Component {
    
    render() {
        var { products } = this.props;
        // console.log(products.length);
        
        return (
            <Products products={products}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Products);

