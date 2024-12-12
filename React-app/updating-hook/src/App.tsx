import { useState } from "react";
function App(){
    const [customer,setCustomer]=useState({
        name:'boitenge',
        address:{
            city:'kigali',
            zipCode:9411
        }
    });
    const handleClick=()=>{
        setCustomer({
            ...customer,
            address:{...customer.address,zipCode:9412}
        })

    }
    return (
        <>
        </>
    )
}
export default App; 