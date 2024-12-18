import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
interface User{
  id:number,
  name:string;
}
function App(){
  const [users,setUsers]=useState<User[]>([]);
  const [error,setError]=useState('');
  
  useEffect(()=>{
   
      const fetchUsers= async ()=>{
        try{
        const res= await axios.get<User[]>('https://jsonplaceholder.typicode.com/vusers')
  setUsers(res.data);
    }
    catch (err){
      setError((err as AxiosError).message);
    }
      
    }
    fetchUsers();
    
    
    //get ->promise ->res/error 
    // .then(res=>setUser(res.data))
    // .catch(error=>setError(error.message));
  },[])
  return (
    <>
{error && <p className="text-danger">{error}</p>
}<ul >
  {users.map(user=> <li key={user.id}>{user.id}  {user.name}</li>)}
</ul></>
  );
}
export default App;