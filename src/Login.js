import React from 'react';
import { auth, provider } from './firebase';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import './Login.css';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));

    };
    return (
        <div className='login'>
            <div className="login_logo">
                <img 
                    src="https://wpdesigns.co.uk/wp-content/uploads/2020/11/Unsplash-Logo-min.jpg"/>
            </div>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login
