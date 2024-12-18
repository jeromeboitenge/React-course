import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface User{
  id:number,
  name:string;
}
function App(){
  const [users,setUser]=useState<User[]>([]);
  const [error,setError]=useState([]);
  
  useEffect(()=>{
    const controller=new AbortController();
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users',{signal: controller.signal})
    .then(res=>setUser(res.data))
    .catch(error=>
    {
      if (error instanceof CanceledError) return;
        setError(error.message);});
    return ()=> controller.abort();
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