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
  
    {/* <Link to="/sign-up"> <button className="bg-white text-black py-1 px-3 rounded-md mr-4">SignUp</button> </Link> 
    <Link to="/login"> <button className="bg-white text-black py-1 px-3 rounded-md">Login</button> </Link>  */}
     <Button primaryColor={"white"} >SignUp</Button>
     <Button primaryColor={"white"} backgroundColor={"white"} borderColor={"white"} className="bold">Login</Button>

  </div> 
 </div> 
</nav> 


  )
}

export default Navbar
