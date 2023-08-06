 import React from 'react'
 import { useState } from 'react';
 import SValidation from './Signupvalidation';
 import axios from 'axios';
 import {useNavigate} from 'react-router-dom';

 export default  function Signup(){
   // const navigate=useNavigate();
    const [isChecked,setIsChecked]=useState(false);
    const [errors,setErrors]=useState({});
    const [values,setValues]= useState({
        userid:'',
        emailid: '',
        password: ''
    });
    console.log("userid",values?.userid);
    const navigate=useNavigate();
    
    const handleCheck = (e)=>{
        setIsChecked(e.target.checked);
    }
    
    const handleInput=(e)=>{
        setValues(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    
    const handleSubmit= async (e)=>{
       e.preventDefault();
       console.log(values);
       const error = await SValidation(values);
       console.log("errors",error);
       setErrors(error);
       console.log('Submitting values:', values, errors);
       if(!error?.userid &&  !error?.emailid && !error?.password)
            {
                console.log('values ', values)
                axios.post('http://localhost:8081/signup',values)
                .then(res=>{navigate('/');})
                .catch(err=>console.log("PROBLEM"));
            }
    };
    return(
        <>
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
         <div className="bg-white p-3 rounded w-35">
            <div className="d-flex justify-content-center  "><h2>Sign Up</h2></div>
             <form  action=''  onSubmit={handleSubmit}onKeyUp={() => console.log('Form keyup event')}  >
                 <div className='mb-2l'>
                     <label id='userid'><strong>User ID: </strong></label>
                     <input type='text' name='userid' placeholder='UserID' onChange={handleInput} className='form-control rounded-0'></input>
                     {errors?.userid && <span className='text-danger'>{errors.userid}</span>}
                 </div>
                 <div className='mb-2l'>
                     <label id='emailid'><strong>Email ID: </strong></label>
                     <input type='text' name='emailid' placeholder='Mail' onChange={handleInput} className='form-control rounded-0'></input>
                     {errors?.emailid && <span className='text-danger'>{errors.emailid}</span>}
                 </div>
                 <div className='mb-3'>
                     <label id='pass'><strong>Password:</strong></label>
                     <input type='text' name='password' placeholder='Password' onChange={handleInput} className='form-control rounded-0'></input>
                     {errors?.password && <span className='text-danger'>{errors.password}</span>}
                 </div>
                
             
             
             <input type='checkbox' checked={isChecked} onChange={handleCheck} />
             <label>I agree to our <a href='www.google.in'>Terms and Conditions</a></label>
             <button className='btn btn-success w-100 rounded 20' type='submit' onClick={handleSubmit} >Create Account</button>
             </form>
             
             
             
             
         </div>
        </div> 
        </>
    )
 }