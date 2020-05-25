import React from 'react';
import {useSelector} from 'react-redux';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

const ShopPage = (props) => {
    const data = useSelector(state => state.shop.data)
    return ( 
        <div className="shop-page">
            {data.map(item => <PreviewCollection key={item.id} title={item.title} items={item.items}/>)}
        </div>
     );
}
 
export default ShopPage;