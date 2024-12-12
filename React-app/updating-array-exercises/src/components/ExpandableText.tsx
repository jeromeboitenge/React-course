import  { useState } from 'react'

interface props{
    children:string,
    maxChar?:number
}


const ExpandableText = ({children,maxChar=100}:props) => {
    const [isExpanded,setExpanded]=useState(false);
    if(children.length<=100)return <p>{children}</p>;
    const text=isExpanded? children: children.substring(0,maxChar);
    return <p>{text}... <button onClick={()=>setExpanded(!isExpanded)} >
       {isExpanded ? 'Less':'More'} </button> </p>
  return (
    <div>{children}</div>
  )
}

export default ExpandableText;