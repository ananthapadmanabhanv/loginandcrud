
import axios from 'axios';
//import {useNavigate} from 'react-router-dom';
//const navigate=useNavigate();

export default async function SValidation(values)
{
    let error={}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
   // const isUsernameTaken= await checkUsernameAvailability(values.userid);
    console.log("svalidation data",values);
    
   
   
   if(values.emailid===''){
        error.emailid='Email should not be empty';

    }
    else if(!emailPattern.test(values.emailid)){
        error.emailid='Email isnt valid'
    }
    
    if(values.password===''){
        error.password='Please enter password';

    }
    else if(!passwordPattern.test(values.password)){
        error.password='Password is too weak,try again!'
    }
   
  //if (isUsernameTaken) {
   //     error.userid = 'Username is already taken';
   //   }
   if(values?.userid==='')
    {
      error.userid='Username cannot be empty'
    }
    else{
      await axios.post('http://localhost:8081/checkuserid',values)
      .then(res=>{
        console.log('res',res.data);
        if(res.data==="True"){
          error.userid='Username already taken!!'
        }
      })
      .catch(erry=>console.log(err));
     console.log('error',error);
      
    }
    return error
}
