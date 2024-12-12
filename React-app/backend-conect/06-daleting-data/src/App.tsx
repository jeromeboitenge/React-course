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

  const deleteUser=(user:User)=>{
    const orginalUsers=[...users];
    setUser(users.filter(u=>u.id !==user.id));
    axios.delete('https://jsonplaceholder.typicode.com/users'+ user.id)
    .catch(error=>{
      setError(error.message);
      setUser(orginalUsers);
    })
  }
  const addUser=()=>{
    const originalUser=[...users];
    const newUser={id:0,name:'Boitenge'};
    setUser([newUser,...users]);
axios.post('https://jsonplaceholder.typicode.com/xusers',newUser)
.then(({data:savedUser})=>setUser([savedUser,...users]))
.catch(error=>{
  setError(error.message);
  setUser(originalUser);
});
  }
  const updateUser=(user:User)=>{
    const originalUsers=[...users]
    const updatedUser={...user,name:user.name +'!'};
    setUser(users.map(u=>u.id===user.id? updatedUser:u))
    axios.patch('https://jsonplaceholder.typicode.com/xusers/'+ user.id ,updateUser)
    .catch(error=>{
      setError(error.message);
      setUser(originalUsers)
    })
  }
  return ( 
    <> 
{error && <p className="text-danger">{error}</p>
}
{
  isLoading&& <div className="spinner-border"></div>
}
<button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
<ul  className="list-group">
  {users.map(user=> <li key={user.id} 
  className="list-group-item d-flex justify-content-between"> 
  {user.id} {user.name} 
  <div>

  <button className="btn btn-outline-secondary mx-1" onClick={()=>
    updateUser(user)
  }> Update</button>
  <button className="btn btn-outline-danger" 
  onClick={()=>deleteUser(user)}>Delete</button>
  </div>
    </li>)
    }
</ul></>
  );
}
export default App; 