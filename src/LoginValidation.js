export default function Validation(values)
{
    let error={}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(values.emailid===''){
        error.emailid='Email should not empty';

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
    console.log(error);
    return error;
}