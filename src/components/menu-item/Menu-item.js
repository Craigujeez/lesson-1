import React from 'react';
import './Menu-item.scss';

const MenuItem = ({title, image, size}) => {
    return ( 
        <div 
            className={`${size}  menu-item`}
        >
            <div 
                className='background-image'
                style={{
                    backgroundImage: `url(${image})`
                    }}
            />
            <div className='content'>
                <h1>{title.toUpperCase()}</h1>
                <span> Shop Now</span>
            </div>
        </div>
     );
}
 
export default MenuItem;