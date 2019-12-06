import React from 'react'
import '../styles/Doctor.css'

const Login = ()=>{
    return(
        <div>
            <div className='main'>
                <div className='card blue lighten-3'>
                    <div className='card-content'>
                        <span className='card-title white-text'>Hello World</span>
                        <p>Hospital login page</p>
                        <p>Terms of use</p>
                        <p>Privacy</p>
                    </div>
                </div>
                <div className='card white'>
                    <div className='card-content'>
                        <span className='card-title black-text'>Login</span>
                        <form action='#'>
                            <span>Username *</span>
                            <input type='text' placeholder='Username'/>
                            <span>Password *</span>
                            <input type='password' placeholder='Password'/>
                            <p className='side'>
                                <input type='checkbox'/>
                                <span>Remember me</span>
                                <a href='#'>Forgot Password</a>
                            </p>
                            <a className='btn-small grey darken-2'>Log In</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login