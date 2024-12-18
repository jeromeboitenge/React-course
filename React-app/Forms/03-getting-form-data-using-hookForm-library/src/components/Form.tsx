import React, { FormEvent, useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
interface FormData{
  name:string;
  age:number;
}
const Form = () => {
  const {register,handleSubmit,formState:{errors}}=useForm<FormData>();
  
  const submit=(data:FieldValues)=>console.log(data);
  
  return (
    <form onSubmit={handleSubmit(submit)}> 
    <div className="mb-3">
      <label htmlFor="name" className="formlabel">Name</label>
    <input  {
      ...register('name',{required:true,minLength:3 })}
       id='name' 
    type="text"
     className="form-control" />
     {errors.name?.type==='required' &&<p className='text-danger'>The name field is required.</p>}
    {errors.name?.type==='minLength' && <p className='text-danger'>the name must be at least 3 chaaracters</p>}
     </div>

    <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
    <input 
    {...register('age')} 
    id='age'   
    type="number" 
    className="form-control" /></div>
<button className="btn btn-primary" type='submit'>Submit</button>

     </form>
  )
}

export default Form