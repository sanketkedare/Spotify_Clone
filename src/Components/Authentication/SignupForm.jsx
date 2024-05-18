import React from 'react'
import FormInput from '../../ui/FormInput';
import Button from '../../ui/Button';
import { useState } from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from '../../firebase';
import {toast} from 'react-toastify';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    number : ''
  })

  const addUser = async () =>{
    try{
      const docRef = await addDoc(collection(db, 'user'),{
        user: formData
      })
      toast.success('user Register Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log("user added successfully", docRef.id)
    }
    catch(error){
      toast.error('Error in user Registered', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log("error adding user info", error)
    }
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    addUser();
  }

  const handleInputChange = (event)=>{
    const {name, value} = event.target;
    setFormData({...formData, [name] : value})
  }
  return (
    <div ClassName="mb-6 ">
    <div className="border rounded-md bg-white p-5 shadow-lg">
        
        <div className="ml-32"><p className="font-bold text-[20px] text-black">Sign up to start listening</p></div>
        <div className="ml-32">
            <form action="" onSubmit={handleSubmit}>
                <FormInput
                  labelText={"full Name"} 
                  inputPlaceholder={"what is your name?"} 
                  inputType={"text"} 
                  required={true} 
                  value ={formData.name}
                  onChange = {handleInputChange}
                  name = "name"
                />
                <FormInput 
                  labelText={"Email Id"} 
                  inputPlaceholder={"Tell me your email id"} 
                  inputType={"email"} 
                  required={true} 
                  value = {formData.email}
                  onChange = {handleInputChange}
                  name = "email"
                />
                <FormInput 
                  labelText={"Password"} 
                  inputPlaceholder={"minimum 6 character"} 
                  inputType={"password"} 
                  required={true} 
                  value = {formData.password}
                  onChange = {handleInputChange}
                  name = "password"  
                />
                <FormInput 
                  labelText={"Mobile Number"} 
                  inputPlaceholder={"Enter your mobile number"} 
                  inputType={"number"} 
                  required={true} 
                  value = {formData.number}
                  onChange = {handleInputChange}
                  name = "number"  
                />

                <Button primaryColor={"black"} background={"green"} borderColor={"black"} className="text-bold hover:bg-red-500" >Submit</Button>

            </form>

        </div>
    </div>
    </div>
  )
}

export default SignupForm
