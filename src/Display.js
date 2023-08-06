import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom';



function Display() {
    
    const [del, setDel] = useState({
      delid:''
    });
    const handleChange=(e)=>{
      setDel(prev=>({...prev,[e.target.name]:e.target.value}));
  }
    const [Data, setData] = useState([]);
    const navigate=useNavigate();
    const location=useLocation();
    var user=location.state.values.emailid;
    const [values,setValue]= useState({
      emailid:user,
      
});
   // const navigate=useNavigate();
    console.log(user)
  
  console.log('passed id to display',values.emailid);
useEffect(() => {
    fetchData();
}, []);
  
    
    const fetchData = async () => {
        console.log('passed id to display1',values.emailid);
        await axios.post('http://localhost:8081/show',values)
        .then(res=>{
          const data=res.data  ;
          console.log(data,"data")
          setData(data)
    
        
    })
       .catch (err=>console.log(err)) ;
      }
     
      console.log(Data,"data")
      const goBack=(e)=>{
        e.preventDefault();
        console.log('emailidbeforegoback',values.emailid);
        navigate("/home" ,{state:{values}});
      }
    
      const handleDelete= async (e)=>{
        console.log('delte',del);
        await axios.post('http://localhost:8081/del',del)
          .then(res=>{
            console.log('deleted');
            navigate("/display");
          })
          .catch(err=>console.log(err));

      }
    
  return (
    <>
    <div>
      
    {/* <h4>Item list for {value.emailid}</h4> */}
    <h2 class="align-center">Inventory</h2>
    
     <table class=" gx-5 table table-striped table-bordered table-hover">
      <thead class="thead-light pr-10 gx-5">
        
          {console.log("data",Data)}
          <th class="gx-5" scope="col">Order No. </th>
          <th class="gx-5" scope="col">Itemname </th>
          <th scope="col">Quantity </th>
          <th scope="col"> Price </th>
          
       
      </thead>
      <tbody> 
      {
        Data?.map((item,index)=>{
          console.log("item",typeof(item))
          return(
          <>
          <tr>
          <td>{item?.orderno}</td>
          <td>{item?.itemname}</td>
          <td>{item?.quantity}</td>
          <td>{item?.price}</td>
          </tr>
          </>
          )
            
          
        
        })
      }
        
       </tbody>
      
    
    </table> 
    <button className='btn btn-success w-100 rounded 20' type='submit' onClick={goBack}>Go Back</button>
    
    <div>
    <button  class='d-flex justify-content-center align-items-center btn btn-success w-25 rounded 10 input-group-btn' type='submit' onClick={handleDelete}  >Delete</button>
    <input type='text' name='delid' placeholder='Order No.' class='input-group form-control w-25 rounded-0' onChange={handleChange}/>
    
    </div>
  </div>
 </> )
};

export default Display;