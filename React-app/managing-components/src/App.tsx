import { useState } from "react";
function App(){
    const [drink,setDrink]=useState({
        title:"Americano",
        price:5
    });
    const handleClick=()=>{
       
        setDrink({...drink,price:6});
    }
return(
    <>
    {drink.price}
    <button onClick={handleClick}>  click Me</button>
    </>
    
);}
export default App;