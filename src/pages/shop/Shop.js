import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverView from '../../components/collections-overview/CollectionsOverview';
import CategoryCollection from '../category/CategoryCollection';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverView}/>
            <Route path={`${match.path}/:collectionId`} component={CategoryCollection} />
        </div>
    )
};

export default ShopPage;