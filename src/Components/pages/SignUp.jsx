import React from 'react'
import SignupForm from '../Authentication/SignupForm';
import AuthNavbar from '../NavBar/AuthNavbar';

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col">
    <AuthNavbar />
    <div className="flex-grow mt-20 ml-64 w-[50%]">
      <SignupForm />
    </div>
  </div>
  )
}

export default SignUp
