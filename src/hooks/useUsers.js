import { useEffect, useState } from "react"
import { getUsers, postUser, updateUser } from "../api/users";

export const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers()
        .then(usersResponse=>setUsers(usersResponse))
    },[])

    const useFetchUsers = async ()=>{
        const userResponse = await getUsers();
        setUsers(userResponse)
    }
    const useAddUsers = async (name,age)=>{
        const userResponse =await postUser(name, age);
        
    }

    return {
        users,
        useFetchUsers
    }
}