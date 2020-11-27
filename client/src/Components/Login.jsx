import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { loginUser } from '../Redux/Login_Register/actions'
import {useHistory,Link} from 'react-router-dom'
import Navbar from './Navbar';
const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const history=useHistory()
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const userDetails = {
        email: user.email,
        password: user.password
    }
    
    const onChange = e => setUser({
        ...user, [e.target.name]: e.target.value
    });


    const onSubmit = e => {
        e.preventDefault();
        console.log(userDetails)
        dispatch(loginUser(userDetails))
    }
    if (isAuth) {
        alert("Logged In Successfully")
        history.push('/dashboard')
    }
    return (
        <div>
            <Navbar/>
         <form className="login" onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm-4 ml-5 mt-5">
                    <h4>Already Registered? Login!</h4>
                    <div className='form-group'>
                        <label>Enter Email</label>
                        <input className='form-control'
                            type='email' name='email' value={user.email} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label>Enter Password</label>
                        <input className='form-control'
                            type='password' name='password' value={user.password} onChange={onChange} />
                    </div>
                    <input className='btn btn-success'
                        type='submit' value='Login' />
                </div>
            </div>
            <Link style={{marginLeft:"50px"}} to="/register">
                {"Don't have an account? Register"}
              </Link>
            </form>
            </div>
)
};

export default Login;
