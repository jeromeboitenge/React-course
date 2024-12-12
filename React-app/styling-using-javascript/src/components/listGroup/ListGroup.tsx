// import { MouseEvent } from "react";
import { useState } from "react";
import   "./listGroup.css";
import styled from 'styled-components';
const Liste=styled.ul`
list-style: none;
    padding: 0;
`;
interface ListItemProps{
  active:boolean;
}
const ListItem=styled.li<ListItemProps>`
padding:5px 0;
background:${props=>props.active? 'blue':'none'}
`;
interface Props{
    items:string [],
    heading:string;
    onSelectItem:(item:string)=>void;
  }
function ListGroup({items,heading,onSelectItem}:Props){

    // const handleClick=(event:MouseEvent)=>console.log(event)
    
    const [selectedIndex,setSelectedIndex]=useState(0);
   

    // if(items.length===0)
   
    
    return <>
    <h1>list</h1>
    {items.length===0 && <p>No Item Found </p>}
    <Liste>
    { items.map((item,index)=>
    <ListItem active={index===selectedIndex}
     onClick={()=>{
        setSelectedIndex(index)
    onSelectItem(item)}} 
     key={item}>{item}</ListItem>)}
  </Liste></>;

}
export default ListGroup;