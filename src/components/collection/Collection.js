import React from 'react';
import {useSelector} from 'react-redux';
import CollectionItem from "../collection-item/CollectionItem";
import "../../styles/collection.styles.scss";

const Collection = (props) => {
    const collectionid = props.match.params.collectionid;
    const data = useSelector(state => state.shop.data);
    console.log(data.filter(item => item.routeName === collectionid ),"test");
    
    return ( 
        <div className="collection-page">
            {data.filter(item => item.routeName === collectionid ).map(item => (
                <div className='collection-preview'>
                    <h2 className='title'>{collectionid.toUpperCase()}</h2>
                    <div className='items'>
                        {item.items.map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Collection;