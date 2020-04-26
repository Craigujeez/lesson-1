import React from 'react';
import {SignIn, Register} from '../../components/form/Form';
import './sign-in.scss'

const SignInPage = () => {
    return ( 
        <div className="sign-in">
            <SignIn/>
            <Register/>
        </div>
     );
}
 
export default SignInPage;