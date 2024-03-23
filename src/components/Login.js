import React from 'react';
import Header from './Header';
import poster from "../resources/netflixposter.jpg"

const Login = () => {
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={poster} alt='poster' />
        </div>
        <form className='absolute p-16 bg-black w-[20%] m-auto left-[40%] top-[10%] bg-opacity-75 rounded-lg'>
            <div className='font-extrabold text-3xl text-white p-2 font-sans'>Sign In</div>
            <input type='text' placeholder='Email Address' className='py-3 px-4 m-2 my-6 block w-full bg-gray-800 bg-transparent bg-opacity-80 rounded-md' />
            <input type='password' placeholder='Enter Password' className='py-3 px-4 m-2 block w-full bg-gray-800 bg-transparent bg-opacity-80 rounded-md' />
            <button className='px-4 py-2 m-2 mt-8 rounded-sm text-white bg-red-600 w-full'>Sign In</button>
            <div className='text-white mx-2 my-6'>New to Netflix? <span>Sign Up Now</span></div>
        </form>
    </div>
  )
}

export default Login;