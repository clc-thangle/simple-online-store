var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        des: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: '',
        des: 'Sản phẩm do samsung sản xuất',
        price: 400,
        inventory: 15
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: '',
        des: 'Sản phẩm do china sản xuất',
        price: 450,
        inventory: 5
    },
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;