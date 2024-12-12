import React, { useEffect, useRef, useState } from 'react'
import Productlist from './components/Productlist';

function App () {
  const [category,setCategory]=useState('');    
   
  return (
    <div>
<select name="" className="form-select"
 onChange={(event)=>setCategory(event.target.value)}> 
<option value=""></option>
<option value="clothing">Clothing</option>
<option value="household">Household</option>
 
</select>

<Productlist category={category}/> 

    </div>
  )
}

export default App;