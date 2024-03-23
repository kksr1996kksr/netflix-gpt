import React from 'react';
import logo from "../resources/netflixLogo.png"

const Header = () => {
  return (
    <div className='absolute w-full px-64 py-2 bg-transparent bg-gradient-to-b from-black'>
        <img 
            className='w-44 bg-transparent'
            src={"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"}
            alt="logo" 
        />
    </div>
  )
};

export default Header;