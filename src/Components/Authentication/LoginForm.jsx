import React from 'react'
import FormInput from '../../ui/FormInput';
import Button from '../../ui/Button';
import {useState} from 'react';
import { collection, query,onSnapshot} from "firebase/firestore";
import {db} from '../../firebase';
import {toast} from 'react-toastify';
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password : ''
  })

  const [user,setUsers] = useState([]);
  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    checkUserCredentials();
  }

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }

  const getAllUsers = async() =>{
    const q = query(collection(db,"user"))
    const users = onSnapshot(q,(querySnapshot) =>{
      let userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({...doc.data(), id:doc.id})
      })
      setUsers(userArray);
    })
  }

  const checkUserCredentials = () => {
    getAllUsers();
    for(let i=0;i<user.length;i++){
      if(user[i].user.email !==formData.email || user[i].user.password !== formData.password){
        toast.error('Invalid credentials' ,{
          position : 'top-right',
          autoClose : 5000
        })
      }
      else{
        toast.success('User logged in success' , {
          position : 'top-right',
          autoClose: 5000
        })

        localStorage.setItem("user", JSON.stringify(user[i]))
        navigate("/");
      }
    }
  }

  return (
    <div ClassName="mb-6 ">
      
    <div className="border rounded-md bg-white p-5 shadow-lg">
        <div className="ml-32"><p className="font-bold text-[20px] text-black">Log in to Spotify</p></div>
        <div className="ml-32">
            <form action="" onSubmit = {handleSubmit}>
                <FormInput 
                  labelText={"Email Id"} 
                  inputPlaceholder={"Tell me your email id"} 
                  inputType={"email"} 
                  required={false}
                  name = "email"
                  onChange = {handleInputChange}
                  value = {formData.email} 
                />
                <FormInput 
                  labelText={"Password"} 
                  inputPlaceholder={"minimum 6 character"} 
                  inputType={"password"} 
                  required={false} 
                  name ="password"
                  onChange = {handleInputChange}
                  value = {formData.password}
                />
                <Button primaryColor={"black"} background={"green"} borderColor={"black"} className="text-bold hover:bg-red-500" >Submit</Button>
            </form>
        </div>
    </div>
    </div>

  )
}

export default LoginForm
