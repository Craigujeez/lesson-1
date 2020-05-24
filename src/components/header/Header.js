import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import '../../styles/header.scss'

const Header = () => {
    const isLoggedIn = useSelector(state => state.firebase.auth.uid);
    
    return ( 
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>

            <div className='options'>
                <Link to='/shop' className='option'> Shop</Link>
                <Link className='option'> Contact</Link>
                { isLoggedIn ? <div className='options' onClick={() => auth.signOut()}>Sign Out</div> : <div className='options'> <Link to='/sign-in'> Sign In </Link> </div>}
            </div>


        </div>
     );
}
 
export default Header;