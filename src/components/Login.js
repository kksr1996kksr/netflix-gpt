import React from 'react';
import Header from './Header';
import poster from "../resources/netflixposter.jpg"

const Login = () => {
  return (
    <div>
        <Header />
        <div>
            <img src={poster} alt='poster' />
        </div>
    </div>
  )
}

export default Login;