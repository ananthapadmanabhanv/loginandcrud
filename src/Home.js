import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css'
import Create from './Create';
import { useState } from 'react';

 function Home() {
  const location=useLocation();
  const navigate=useNavigate();
 
  var user=location.state.values.emailid;
 /* await axios.post('http://localhost:8081/fetchuserid',user)
  .then(res=>{
    let userid=res.data;
  })
  .catch(err=>console.log(err));*/

  const handleInput=(e)=>{
    setValues(prev=>({...prev,[e.target.name]:e.target.value}));
}

  const [values,setValues]= useState({
    itemname: '',
    quantity: '',
    price:'',
    emailid:user,
});
  console.log('user:',user);
  const handleSubmit= (e)=>{
    e.preventDefault();
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
    document.getElementById("itemname").value="";
    
     console.log('values',values);
     //const uid=values.userid;
     axios.post('http://localhost:8081/insert',values)
    .then(res=>{ navigate("/home" ,{ state:{values}});})
    .catch(err=>console.log("PROBLEM"));

 };

  const handleDisplay=(e)=>{
    e.preventDefault();
    navigate("/display",{state:{values}});
  }
  const handleSignout=(e)=>{
    e.preventDefault();
    navigate("/");
  }


  return (<>

<body>

  <div class="container">
  <button type="signout" onClick={handleSignout}>SignOut</button>
    <div class="login-box">
      <h2>CRUD</h2>
      <form>
      
        <div class="input-group">
          <label for="username">Welcome, <b>{user}!!</b></label>
          
        </div>
        <label htmlFor='itemname'><b>Item Name:</b> </label>
          <input  onChange={handleInput} placeholder='Itemname' name="itemname" id="itemname" required/> 
          <label htmlFor="quantity"><b>Quantity:</b> </label>
          <input onChange={handleInput}  placeholder='Quantity'   name="quantity" id="quantity" required/>
          <label htmlFor="Price"><b>Rate: </b></label>
          <input  onChange={handleInput} placeholder='Price'   name="price" id="price" required/>
          <br></br>
          <br/>
        <button class="btn btn-outline-dark" type="Submit" onClick={handleSubmit}>Insert</button>
        &nbsp;&nbsp;
      <button class="btn btn-outline-dark" type="SUBMIT" onClick={handleDisplay}>Display</button>
    
        <div class="input-group">
         
        </div>
        
      </form>
    </div>
  </div>
</body>


  </>
   
  )
    
 
}

export default Home