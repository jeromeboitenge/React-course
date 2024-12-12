import React, { useState } from 'react'
import { FaHeart,FaRegHeart } from "react-icons/fa";
interface props{
  onClick:()=>void;
}



const Like = ({onClick}:props) => {
  const [status,setStatus]=useState(true);
  const toogle=()=>{
    setStatus(!status);
    onClick();
  }
  if(status)
  return (
    <div onClick={toogle}><FaHeart color='#ff6b81' size={25}/></div>
  )
  return (
    <div onClick={toogle}><FaRegHeart color='#ff6b81' size={25}/></div>
  )
}

export default Like