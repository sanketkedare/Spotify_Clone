import React from 'react'
import LoginForm from '../Authentication/LoginForm';

const Login = () => {
  return (
    <div className="flex-grow mt-20 ml-64 w-[50%]">
      <div className="text-bold text-3xl ml-28 text-white mb-10"><span>Spotify</span></div>
      <LoginForm />
    </div>
  )
}

export default Login
