import { useState } from 'react'
import ListGroup from './components/listGroup/ListGroup';
import './App.css';
function App(){

  let items=[
    'Kigali',
    'Bujumbura',
    'Kampala',
    'Nairobi'
];
const handleSelectItem=(item:string)=>{
  console.log(item);}

  return(
    <>
    <div>
     <ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}/>
   </div>
    </>
  );
}
export default App; 