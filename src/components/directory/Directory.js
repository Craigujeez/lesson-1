import React from 'react';
import MenuItem from '../menu-item/Menu-item';
import './directory.scss'

const Directory = () => {
    const sections = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 1,
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 4,
            size:'large',
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 5,
            size: 'large',
        },
    ]
    return ( 
        <div className='directory-menu'>
            {
                sections.map(item=>{
                    return <MenuItem key={item.id} title={item.title} image={item.imageUrl} size={item.size} />
                })
            }
        </div>
     );
}
 
export default Directory;