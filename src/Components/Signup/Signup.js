
import React from 'react';

import { FaGoogle } from 'react-icons/fa';

import './Signup.css';
import useAuth from '../../hook/useAuth';




const Signup = () => {

    const { handleEmail, handlePass, signInUsingEmail, error, toggleLogin, isLogin, signInUsingGoole, } = useAuth();
    return (
        <div>
            <h1 className='text-center text mt-5 mb-5'> Please {isLogin ? 'Login' : 'Signup'}</h1>
            <form onSubmit={signInUsingEmail} className='container w-50'>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePass} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Already Register?</label>
                </div>
                <div className="mb-3 text-danger">
                    {error}

                </div>
                <button type="submit" className="btn btn-custom mb-5"> {isLogin ? 'Login' : 'Signup'}</button>


            </form>
            <div className='shadow-sm mx-auto d-flex align-items-center px-4' style={{ width: '200px', height: '40px', cursor: 'pointer' }} onClick={signInUsingGoole}>
                <h5 className='text'>Sign in with</h5>
                <button className='my-btn ms-1'><FaGoogle size='20px' /></button>

            </div>

        </div>
    );
};

export default Signup;