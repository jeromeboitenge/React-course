// import { MouseEvent } from "react";
import { useState } from "react";
interface Props{
    items:string [],
    heading:string;
    onSelectItem:(item:string)=>void;
  }
function ListGroup({items,heading,onSelectItem}:Props){

    // const handleClick=(event:MouseEvent)=>console.log(event)
    
    const [selectedIndex,setSelectedIndex]=useState(-1);
   

    // if(items.length===0)
   
   
    return <>
    <h1>list</h1>
    {items.length===0 && <p>No Item Found </p>}
    <ul className="list-group">
    { items.map((item,index)=><li 
    className={selectedIndex===index? 'list-group-item active':'list-group-item' }
     onClick={()=>{
        setSelectedIndex(index)
    onSelectItem(item)}} 
     key={item}>{item}</li>)}
  </ul></>;

}
export default ListGroup;