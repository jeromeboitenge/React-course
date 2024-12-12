import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button/Button";

function App(){
  const [alertVisible,setAlertVisibility]=useState(false);
  return(<div>
    {alertVisible&&<Alert onClose={
      ()=>setAlertVisibility(false)
    } >
      Hello <h1>Boitenge</h1>
    </Alert >}
    <Button  onClick={()=>
        setAlertVisibility(true)
    }>
    My Button
    </Button>
    </div>);

  
// import Message from "./Message";
// import ListGroup from "./components/ListGroup";


//   let items=[
//     'Kigali',
//     'Bujumbura',
//     'Kampala',
//     'Nairobi'
// ];
// const handleSelectItem=(item:string)=>{
//   console.log(item);
// }

//   return(
//   <>

//   <div>
//     <ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}/>
//   </div>
  
//   </>);
}
export default App;