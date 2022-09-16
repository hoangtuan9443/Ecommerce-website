import * as Actions from '../controllers/actionTypes'

const initialState = {
    products: [
        {
            id: 1,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-adidas-x-speedfportal-messi-3-tf-gw8395-trang-do-1_bc0c52906e6449448fc67189ee140116_large.jpg',
            name: 'ADIDAS X SPEEDFPORTAL MESSI.3 TF - GW8395 - TRẮNG/ĐỎ',
            taxes: '160',
            price: '2222'
        },
        {
            id: 2,
            img: 'https://product.hstatic.net/200000278317/product/-da-banh-nike-react-phantom-gt2-pro-tf-dc0768-407-xanh-ngoc-vang-den-1_80ffe347a3874402b8108b66cc8096f6_large.jpg',
            name: 'NIKE REACT PHANTOM GT2 PRO TF - DC0768-407- XANH NGỌC/VÀNG',
            taxes: '160',
            price: '2100'
        },
        {
            id: 3,
            img: 'https://product.hstatic.net/200000278317/product/ay-da-banh-nike-phantom-gt2-academy-tf-dc0803-407-xanh-ngoc-vang-den-1_68c7be3db54449ad826b9b2fdeb4cffa_large.jpg',
            name: 'NIKE PHANTOM GT2 ACADEMY TF - DC0803-407 - XANH NGỌC/VÀNG',
            taxes: '160',
            price: '2500'
        },
        {
            id: 4,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-nike-tiempo-react-legend-9-pro-tf-da1192-002-trang-vang-1_14e08b63023b4657817f78d3f18ca88d_large.jpg',
            name: 'NIKE TIEMPO REACT LEGEND 9 PRO TF - DA1192-002 - TRẮNG/VÀNG',
            taxes: '160',
            price: '2055'
        },
        {
            id: 5,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-puma-future-z-1-4-pro-cage-106992-01-den-xanh-la-1_6736adb9511f4c6ea49ce855f3c1d2c3_large.jpg',
            name: 'PUMA FUTURE Z 1.4 PRO CAGE - 106992-01 - ĐEN/XANH LÁ',
            taxes: '160',
            price: '2150'
        },
        {
            id: 6,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-puma-ultra-match-tf-106903-01-xanh-ma-non-1_c914baca103242059449f1ce2e1e5e62_large.jpg',
            name: 'PUMA ULTRA MATCH TF - 106903-01 - XANH MẠ NON',
            taxes: '160',
            price: '2200'
        },
        {
            id: 7,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-puma-ultra-ultimate-cage-tf-106893-01-xanh-ma-non-1_a856c9f8be9c4f26a8775095b528262f_large.jpg',
            name: 'PUMA ULTRA ULTIMATE CAGE TF - 106893-01 - XANH MẠ NON',
            taxes: '160',
            price: '2100'
        },
        {
            id: 8,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-adidas-x-speedportal-3-tf-gw8487-den-xam-1_d6e1fbbdf91847e8a9e00ad21bb49ef1_large.jpg',
            name: 'ADIDAS X SPEEDPORTAL.3 TF - GW8487 - ĐEN XÁM XANH LÁ',
            taxes: '160',
            price: '2000'
        },
        {
            id: 9,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-adidas-x-speedportal-1-tf-gw8973-xanh-la-ma-1_9f396938bc7d46559fc6816911c8b4a6_large.jpg',
            name: 'ADIDAS X SPEEDPORTAL.1 TF - GW8973 - XANH LÁ MẠ',
            taxes: '160',
            price: '2850'
        },
        {
            id: 10,
            img: 'https://product.hstatic.net/200000278317/product/giay-da-banh-nike-tiempo-legend-9-academy-tf-da1191-343-xanh-ma-non-1_1f4aadca72c0492d930b60b5d99bc17b_large.jpg',
            name: 'NIKE TIEMPO LEGEND 9 ACADEMY TF - DA1191-343 - XANH MẠ NON',
            taxes: '160',
            price: '2300'
        }
    ]
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case Actions.ADD_NEW_SAN_PHAM:{
            const {products} = action.data
            let copyPayload = [...state.products]
            copyPayload.unshift(products)
            return {
                products: copyPayload
            }
        }
        default: return state
    }
}

export default productsReducer