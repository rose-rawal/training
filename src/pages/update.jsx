import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUsers } from '../hooks/useUsers'
import { updateUser } from '../api/users'
import Layout from '../layouts'

const Update = () => {
    const id=useParams();
    const [data,setData]=useState({
        name:'',
        age:''
    })
    const {users} =useUsers();
    const detail={};
    users.map((n)=>{
       if(parseInt(n._id)===parseInt(id.id)){
        detail.name=n.name;
        detail.age=n.age;
       }
       
    })
    
        // setData(prev=> {return {
        //  name:detail.name,
        //  age:detail.age
        // }})
    
    
    const handleClick=async(e)=>{
        e.preventDefault()
        const send={_id:id.id,name:data.name,age:data.age}
        const res=await updateUser(send)
        console.log(res)
    }
  return (
    <Layout>
    <form>
        <label htmlFor='name'>Name:</label><input type="text" id='name' value={data.name} onChange={(e)=>{setData(prev=>{return {...prev,name:e.target.value}});console.log(data)}}/><br/>
      <label htmlFor='age'>Age:</label><input type="text" id='age' value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}}/><br/>
      <button onClick={handleClick}>Update</button>
    </form>
    </Layout>
  )
}

export default Update
