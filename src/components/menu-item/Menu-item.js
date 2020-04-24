import React from 'react';
import {withRouter} from 'react-router-dom';
import './Menu-item.scss';

const MenuItem = ({title, item, size}) => {
    return ( 
        <div 
            className={`${size}  menu-item`}
        >
            <div 
                className='background-image'
                style={{
                    backgroundImage: `url(${item.items[0].imageUrl})`
                    }}
            />
            <div className='content'>
                <h1>{title.toUpperCase()}</h1>
                <span> Shop Now</span>
            </div>
        </div>
     );
}
 
export default  withRouter(MenuItem);