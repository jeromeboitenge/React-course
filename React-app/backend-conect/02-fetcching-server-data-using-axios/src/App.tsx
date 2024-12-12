import axios from "axios";
import { useEffect, useState } from "react";
interface User{
  id:number,
  name:string;
}
function App(){
  const [users,setUser]=useState<User[]>([]);
  const [error,setError]=useState([]);
  
  useEffect(()=>{
    axios.get<User[]>('https://jsonplaceholder.typicode.com/vusers')
    .then(res=>setUser(res.data))
    .catch(error=>setError(error.message));
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