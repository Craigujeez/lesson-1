import React from 'react';
import {useSelector} from 'react-redux';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import "../../styles/collections-overview.styles.scss"

const CollectionsOverview = ({match}) => {
    const data = useSelector(state => state.shop.data);
    return ( 
        <div className="collection-preview">
            {data.map(item => <PreviewCollection key={item.id} name={item.routeName} title={item.title} items={item.items} match={match} />)}
        </div>
     );
}
 
export default CollectionsOverview;