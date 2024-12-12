import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface User{
  id:number,
  name:string;
}
function App(){
  const [users,setUser]=useState<User[]>([]);
  const [error,setError]=useState([]);
  const [isLoading,setLoading]=useState(false);
  
  useEffect(()=>{
    const controller=new AbortController();
    setLoading(true);
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users',{signal: controller.signal})
    .then((res)=>{
      setUser(res.data);
setLoading(false);
    })
    .catch(error=>
    {
      if (error instanceof CanceledError) return;
        setError(error.message);
      setLoading(false);
    });
    return ()=> controller.abort();
  },[])
  return (
    <>
{error && <p className="text-danger">{error}</p>
}
{
  isLoading&& <div className="spinner-border"></div>
}
<ul >
  {users.map(user=> <li key={user.id}>{user.id}  {user.name}</li>)}
</ul></>
  );
}
export default App;