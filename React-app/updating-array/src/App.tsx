import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App(){
    const [cartItem,setCartItems]=useState(['product1','product2']);
    return(
        <>
            <NavBar cartItemsCount={cartItem.length}/>
            <Cart cartItem={cartItem} onClear={()=>setCartItems([])}/>
        </>
    );
}
export default App;