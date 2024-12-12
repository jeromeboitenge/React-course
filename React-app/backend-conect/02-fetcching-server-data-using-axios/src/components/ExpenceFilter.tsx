import React from 'react'
import categories from '../categoris';
interface props{
    onSelectCategory:(category:string)=>void;
}

const ExpenceFilter = ({onSelectCategory}:props) => {
  return (
   <select name="" id="" className="form-select" 
   onChange={(event)=>onSelectCategory(event.target.value)}>
{    categories.map(category =><option key={category} value={category}>{category}</option>)
}   </select>
  )
}

export default ExpenceFilter;