import * as types from './../constants/ActionType';
import products from './products';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
            id: 3,
            name: 'Oppo R17 Pro',
            image: 'https://halomobile.vn/wp-content/uploads/2018/03/oppo-r17-pro-600x600.jpg',
            des: 'Sản phẩm do China sản xuất',
            price: 450,
            inventory: 5,
            rating: 5
        },
        quantity : 5
    },
    {
        product : {
            id: 3,
            name: 'Oppo R17 Pro',
            image: 'https://halomobile.vn/wp-content/uploads/2018/03/oppo-r17-pro-600x600.jpg',
            des: 'Sản phẩm do China sản xuất',
            price: 450,
            inventory: 5,
            rating: 5
        },
        quantity : 3
    }
];

const cart = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
                console.log(action);
                return [...state];
        default: return [...state];
    }
}

export default cart;