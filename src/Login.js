import { useState } from 'react';
import React  from 'react';
import {useNavigate,useLocation,Link} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
export default Login;

//const navigate=useNavigate();
  function Login() {
    const [values,setValues]= useState({
        emailid: '',
        password: ''
});
    const navigate=useNavigate();
    const [errors,setErrors]=useState({});
    const handleInput=(e)=>{
        setValues(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    const handleSubmit= (e)=>{
       e.preventDefault();
       setErrors(Validation(values));
      // console.log('Submitting values:', values, errors);
       if(!errors.emailid && !errors.password && values.emailid!=='' && values.password!==''){
        console.log('values',values);
        //const uid=values.userid;
        axios.post('http://localhost:8081/login',values)
        .then(res=>{
            if(res.data ==="Success" ){
           navigate("/home" ,{ state:{values}});
        }
            else{
                alert("User does not exist!");
            }
        })
        .catch(err=>console.log(err));
       }
    };

    return (
        <>
        
       <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        
        <div className="bg-white p-3 rounded w-35">
        <h2 className='d-flex justify-content-center align-items-center'>login</h2>
            <form action='' onSubmit={handleSubmit}>
           
                <div className='mb-2'>
                    <label htmlFor='emailid'><strong>Email ID: </strong></label>
                    <input type='text' name='emailid' placeholder='Mail' onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.emailid && <span className='text-danger'>{errors.emailid}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='pass'><strong>Password:</strong></label>
                    <input type='password' name='password' placeholder='Password' onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
            </form>
            <button className='btn btn-success w-100 rounded 20' type='submit' onClick={handleSubmit} >Log In</button>

            <Link to='/signup' className='btn btn-secondary btn-default border w-100  rounded 20'>Sign Up</Link>
            <p>By Clicking Sign In,<br></br>You agree to our <a href='www.google.in'>Terms and Conditions</a></p>
            
        </div>
       </div> 
       </>
    )
}