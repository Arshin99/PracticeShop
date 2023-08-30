export const SHOE = 'shoe';
export const HAT = 'hat';
export const SHIRT = 'shirt';

export const CATEGORIES = [SHOE,HAT,SHIRT]

export const PRODUCTS = [
    {
        id: 1,
        name: 'Blue Nike',
        category: SHOE,
        price: 150,
        size: '45',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f92ad8a8-0c67-4de7-87ef-9e4299b1eaa0/air-jordan-1-elevate-low-shoes-XlkVrM.png'
    },
    {
        id: 2,
        name: 'Red Nike',
        category: SHOE,
        price: 170,
        size: '44',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4ea47b43-2415-4702-81b6-097f89331ff1/air-force-1-low-retro-shoes-vjL3G2.png'
    },
    {
        id: 3,
        name: 'White Dress',
        category: SHIRT,
        price: 250,
        size: 'XL',
        image: 'https://www.schoolwear.ie/wp-content/uploads/2016/04/White-Shirt.jpg'
    },
    {
        id: 4,
        name: 'Black School Bag',
        category: BAG,
        price: 200,
        size: 'Average',
        image: 'https://activesquare.com.pk/cdn/shop/products/black.jpg?v=1641909919'
    }
]

export const DATABASE = 