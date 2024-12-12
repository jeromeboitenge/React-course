import categories from '../categoris';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
const schema=z.object({
    description:z.string().min(3,
        {message:'Description should be at least 3 characters.'}).max(50),
    amount:z.number({invalid_type_error:'Amount is required.'}

    ).min(0.01).max(100_000),
    category:z.enum(categories,
        {message:'category is required.'}) 
});
type ExpenceFormData=z.infer<typeof schema>

interface props{
    onSubmit:(data:ExpenceFormData)=>void;
}
 
const ExpenceForm = ({onSubmit}:props) => {

   const {register,
    handleSubmit,
    reset,
    formState:{errors} }
   =useForm<ExpenceFormData>({resolver:zodResolver(schema)})

  return (
<form  onSubmit={handleSubmit(data=>
    {
        onSubmit(data);
        reset();
    }
)}>
    <div className="mb-3">
        <label htmlFor="description" className="form-label">Description
            </label><input {...register('description')}
             type="text"
              id='description' 
             className='form-control'/>
            </div>
           {errors.description && 
           <p className='text-danger'>
            {errors.description.message}</p>}
            <div className="mb-3"><label htmlFor="amount"
             className="form-label">Amount</label>
            <input {...register('amount',
                {valueAsNumber:true})} id='amount'
                 type="number"  className='form-control'/>
            </div>
            {errors.amount && <p className='text-danger'>
                {errors.amount.message}</p>}

            <div className="mb-3">
                <label htmlFor="category" 
                className="form-label">Category</label>
                <select {...register('category')} 
                name="category" id="category" 
                className="form-select">Category
                    <option value=""></option>
                    {    categories.map(category =><option key={category} 
                    value={category}>{category}</option>)}

                    </select></div>
                    {errors.category && <p className='text-danger'>
                        {errors.category.message}</p>}


<button className="btn btn-primary">Submit</button>
</form>  )
}

export default ExpenceForm