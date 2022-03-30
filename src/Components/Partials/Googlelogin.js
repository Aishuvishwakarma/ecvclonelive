import React from 'react'
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
const responseGoogle = (response) => {
    console.log(response);
  }
  
  ReactDOM.render(
    <GoogleLogin
    
       clientId="107598727249325563821"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      redirectUri="https://accounts.google.com/o/oauth2/auth"
      cookiePolicy='single_host_origin'
    />,
    document.getElementById('googleButton')
  );