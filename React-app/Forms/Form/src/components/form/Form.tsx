import React, { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver  } from '@hookform/resolvers/zod';
import './Form.css'

const schema=z.object({
  name:z.string().min(3,{message:'The Name field must be at least 3 characters.'}),
  province:z.string().min(3,{message:'The Name field must be at least 3 characters.'}),
  district:z.string().min(3,{message:'The Name field must be at least 3 characters.'}),
  sector:z.string().min(3,{message:'The Name field must be at least 3 characters.'}),
  cell:z.number({invalid_type_error:'Age field is required.'}).min(15,{message:'The age must be at least 15.'})

});
type FormData= z.infer <typeof schema>;
const Form = () => {
  const {register,handleSubmit,formState:{errors}}=useForm<FormData>({resolver:zodResolver(schema)});
  
const submit=(data:FieldValues)=>console.log(data);
  return (
    <form onSubmit={handleSubmit(submit)
    }>
      <div className="address">
      <div className="form-header"><h1>Share Place</h1></div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Names:      </label>
        <input {...register('name')}
        id='name' 
        type="text" 
        placeholder='Your Names'
        className='form-control' />
       {errors.name && <p className='text-danger'>{errors.name.message}</p>}
        </div>
        <div className="mb-3">
        <label htmlFor="province" className="form-label">Province:</label>
        <input {...register('province')}
        id='province' 
        type="text" 
        placeholder='Province'
        className='form-control' />
       {errors.province && <p className='text-danger'>{errors.province.message}</p>}
        </div>
        <div className="mb-3">
        <label htmlFor="district" className="form-label">District:</label>
        <input {...register('district')}
        id='district' 
        type="text" 
        placeholder='District'
        className='form-control' />
       {errors.district && <p className='text-danger'>{errors.district.message}</p>}
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Sector:</label>
        <input {...register('sector')}
        id='sector' 
        type="text" 
        placeholder='Sector'
        className='form-control' />
       {errors.sector && <p className='text-danger'>{errors.sector.message}</p>}
        </div>
        </div>
        <div className='image-section'>
        {/* <label htmlFor="images" className="form-label"><h1>Images</h1></label> */}

          <div>

    <input type="file" id="image" name="image" accept="image/*" required />
          </div>
          <div>

<input type="file" id="image" name="image" accept="image/*" required />
      </div>
      <div>

<input type="file" id="image" name="image" accept="image/*" required />
      </div>
      <button  className="btn btn-primary">Upload</button>
        </div>
        <div className="owner-profile">
        <label htmlFor="profile" className="form-label">Upload your profile</label>
        <input type="file" id="image" name="image" accept="image/*" required />
        </div>
        <div className="description-header">
        <label htmlFor="profile" className="form-label">Description</label>
        <textarea 
  className="description" 
  id="description" 
  rows="5"
/>        </div>
        <div>
          <button  className="btn btn-primary">Share</button>
          </div>
    </form>
  )
}

export default Form;