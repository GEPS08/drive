import google from './images/google.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from './Buttontemp'
import { Link, useNavigate } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const googlelogin = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        localStorage.setItem('userData', JSON.stringify(profile));
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    useEffect(() => {
        if (profile) {
            localStorage.setItem('userData', JSON.stringify(profile));
        }
    }, [profile]);

    useEffect(() => {
        if (profile.email) {
            navigate('/signin');
        }
    }, [profile]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='box'>
          <h className='header'>
            Login
          </h>
        <Button className='signin-button' onClick={() => googlelogin()}>
            <img src={google} class='google'></img>
            Sign In With Google
        </Button>
        </div>
      </header>
    </div>
  );
}

export default Login;
