import React, { FormEvent, useRef } from 'react'

const Form = () => {
    const nameRef=useRef <HTMLInputElement> (null);
    const ageRef=useRef <HTMLInputElement> (null);
    const person={
        Name:'',
        age:0
    }
    const handleSubmit=(event:FormEvent)=>{
        event.preventDefault();
        if(nameRef.current!==null)
    // console.log(nameRef.current.value,' ',ageRef.current.value);

person.Name=nameRef.current.value;
if(ageRef.current!==null)
person.age=parseInt(ageRef.current.value);
console.log(person);
}
  return (
    <form onSubmit={handleSubmit}> <div className="mb-3"><label htmlFor="name" className="formlabel">Name</label>
    <input id='name' ref={nameRef} type="text" className="form-control" /></div>
    <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
    <input  id='age'ref={ageRef} type="number" className="form-control" /></div>
<button className="btn btn-primary" type='submit'>Submit</button>

     </form>
  )
}

export default Form