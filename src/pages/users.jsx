import React, { useEffect, useState } from 'react'
import Layout from '../layouts'
import { useUsers} from '../hooks/useUsers'
import { postUser, deleteUser } from '../api/users'
const UsersPage = () => {

  const {users } = useUsers()
  const [data,setData]=useState({
    name:'',
    age:''
  })
  const posting=async(name,age)=>{
    const response=await(postUser({name,age}));
    console.log(response);
  }
const handleClick=(e)=>{
  e.preventDefault();
  posting(data.name,data.age);
}
const handleDelete=async(_id)=>{
//  const response= await deleteUser(_id);
//  console.log(response);
}

  return (
    <Layout>
      <label htmlFor='name'>Name:</label><input type="text" id='name' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value});console.log(data.name)}}/><br/>
      <label htmlFor='age'>Age:</label><input type="text" id='age' value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}}/><br/>
      <button onClick={handleClick}>Submit</button>
      Users List from backend:
      <ul>
        {users.map(({_id,name, age})=><li className='flex gap-4' key={`${name}-${age}`}>
            <div>{name}</div>
            <div>{age}</div>
            <button onClick={()=>{handleDelete(_id)}}>Delete</button>
        </li>)}
      </ul>
    </Layout>
  )
}

export default UsersPage
