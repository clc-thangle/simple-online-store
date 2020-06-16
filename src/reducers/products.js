var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
        des: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy Fold',
        image: 'https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-600x600.jpg',
        des: 'Sản phẩm do samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo R17 Pro',
        image: 'https://halomobile.vn/wp-content/uploads/2018/03/oppo-r17-pro-600x600.jpg',
        des: 'Sản phẩm do china sản xuất',
        price: 450,
        inventory: 5,
        rating: 5
    },
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;