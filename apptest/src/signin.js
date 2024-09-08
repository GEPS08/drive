import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import FileUpload from './FileUpload';

function signin() {
    const storedData = localStorage.getItem('userData');
    const userData = JSON.parse(storedData);

    

    return (
        <div>
            <div>{userData.id}</div>
            <div>{userData.email}</div>
            <div>{userData.verified_email}</div>
            <div>{userData.name}</div>
            <div>{userData.given_name}</div>
            <div>{userData.family_name}</div>
            <img src={userData.picture} />
            <h1>File Upload</h1>
            <FileUpload />
        </div>
    );
}
export default signin;