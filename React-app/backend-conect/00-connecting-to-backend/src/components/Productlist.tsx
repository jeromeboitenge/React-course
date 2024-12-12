import React, { useEffect, useState } from 'react'

const Productlist = ({category}:{category:string}) => {
   const [Product,setProduct] =useState<string[]>([]);
   useEffect(()=>{
    console.log('fetching product in ',category);
    setProduct(['clothing','household']);
   },[category])
  return ( 
    <div>Productlist</div>
  )
}

export default Productlist