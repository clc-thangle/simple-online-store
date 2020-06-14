import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';

class Products extends Component {
    render() {
        return (
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

export default Products;

