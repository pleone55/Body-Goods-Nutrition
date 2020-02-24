const INITIAL_STATE = {
    sections: [
        {
            title: 'bcaas',
            imageUrl: 'https://static.wixstatic.com/media/6a8102_3dd61e94d05f4353a1a34ab31a2c82e8.jpg',
            id: 1,
            linkUrl: 'shop/bcaas'
        },
        {
            title: 'pre',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1228/5232/products/PWO_Portrait_V1_1600x.jpg?v=1567045117',
            id: 2,
            linkUrl: 'shop/preworkout'
        },
        {
            title: 'protein',
            imageUrl: 'https://nobullnutrition.co/wp-content/uploads/2016/05/DSC_5937.jpg',
            id: 3,
            linkUrl: 'shop/protein'
        },
        {
            title: 'womens',
            imageUrl: 'https://www.mybodygoods.com/wp-content/uploads/2019/11/ApparelCTA.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://www.mybodygoods.com/wp-content/uploads/2019/11/SuplementsCTA.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;