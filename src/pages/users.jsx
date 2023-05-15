import React, { useEffect, useState } from 'react'
import Layout from '../layouts'
import { useUsers} from '../hooks/useUsers'
import { postUser, deleteUser } from '../api/users'
import { Link } from 'react-router-dom'
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
 const response= await deleteUser({_id});
 console.log(response);
}

  return (
    <Layout>
      <label htmlFor='name'>Name:</label><input type="text" className='border-solid border-black border-2 rounded-xl h-10 w-96' id='name' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value});console.log(data.name)}}/><br/>
      <label htmlFor='age'>Age:</label><input type="text" className='border-solid border-black border-2 rounded-xl h-10 w-96' id='age' value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}}/><br/>
      <button onClick={handleClick} className='text-white bg-black py-2 px-10 rounded mb-10'>Submit</button>
      <h2 className='text-cyan-700 text-lg'>Users List from backend:</h2>
      
        <table>
          
        {users.map(({_id,name, age})=><tr key={`${name}-${age}`}>
            <td><div className='p-5'>{name}</div></td>
            <td><div className='p-5'>{age}</div></td>
            <td className='p-5'><button onClick={()=>{handleDelete(_id)}} className='bg-orange-300 px-5 py-2 rounded'>Delete</button></td>
            <td className='p-5'><Link to={`/api/users/update/${_id}`} className='bg-orange-200 px-5 py-2 rounded'>Update</Link></td>
            </tr>
        )}
        
        </table>
    </Layout>
  )
}

export default UsersPage
