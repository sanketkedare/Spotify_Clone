import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../ui/Button"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   
<nav className="h-[50px] fixed w-full items-center flex"> 
  <div className="flex items-center w-[60%] m-auto justify-between bg-black"> 
     <div className="flex w-[50%] items-center justify-between"> 
        <div className="text-white"> 
            <IoIosArrowBack />
        </div> 
     </div> 

  <div className="flex"> 
  
    <Link to="/signup"> <Button primaryColor={"white"} className="bg-white text-black py-1 px-3 rounded-md">SignUp</Button> </Link> 
    <Link to="/login"> <button className="bg-white text-black py-1 px-3 rounded-md">Login</button> </Link> 
     

  </div> 
 </div> 
</nav> 


  )
}

export default Navbar
