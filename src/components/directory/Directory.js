import React from 'react';
import {useSelector} from 'react-redux';
import MenuItem from '../menu-item/Menu-item';
import './directory.scss'

const Directory = () => {
    const data = useSelector(state => state.shop.data)
    
    return ( 
        <div className='directory-menu'>
            {
                data.map(item=>{
                    return <MenuItem key={item.id} title={item.title} item={item} size={item.size} />
                })
            }
        </div>
     );
}
 
export default Directory;