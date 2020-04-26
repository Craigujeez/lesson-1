import React,{useState} from 'react';
import '../../styles/forms.scss'

export const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input 
                name={otherProps.name}
                type={otherProps.type}
                value={otherProps.value}
                className='form-input' 
                onChange={(e)=>handleChange(e.target.value)}
                required={otherProps.required}
            />
                    <label for={otherProps.name} className={`${otherProps.value.length ? 'shrink' : '' }`}>
                        {label}
                    </label>
        </div>
    )
}

export const Button = ({title, ...otherProps}) => {
    return (
        <button className='custom-button title' {...otherProps}>{title}</button>
    )
}

export const SignIn = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword('');
        setEmail('');
    }
    return ( 
        <div className='sign-in'>
            <h2> I already have an account</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={(e) => handleSubmit(e)}>
                <FormInput
                     name='email' 
                     type='email' 
                     handleChange={setEmail}
                     label='Email'
                     value={Email} 
                     required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={setPassword} 
                    label='Password'
                    value={Password} 
                    required
                />
                <Button type='submit' title='Sign In'/>
            </form>
        </div>
     );
}

export const Register = () => {
    return (
        <div>

        </div>
    )
}