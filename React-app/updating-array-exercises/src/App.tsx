import { useState } from "react";
import ExpandableText from "./components/ExpandableText";


function App(){
    const [game,setGame]=useState({
        id:1,
        player:{
            name:'john',
        },
    });
    const handleClick=()=>{
        setGame({...game,
            player:{...game.player,name:'bob'} });
    }
    const onClear=()=>{
        // setGame({});

    }
    const [pizza,setPizza]=useState({
        name:'spiccy pepperoni',
        toppings:['Mushroom']
    })
    const handlePizza=()=>{
        setPizza({
            ...pizza,toppings:[...pizza.toppings,'cheese']
        })
    }
    const [cart,setCart]=useState({
        discount:.1,
        items:[
            {id:1,title:'product1',quantity:1},
        {id:2,title:'product2',quantity:1}]
    });
    const changeCart=()=>{
        setCart({
        ...cart,items:cart.items.map(item=>item.id===1? {...item,quantity:item.quantity+1}:item)
        })
    }
return(
    <>
    
    <button onClick={handleClick}>change me</button>
    <div>{game.id} {game.player?.name}</div>
    <button onClick={onClear}>clear</button>
    <button onClick={handlePizza}>pizza</button>
    <div>{pizza.name} {pizza.toppings}</div>
    <button onClick={changeCart}>cart</button>
    <div>
                Discount: {cart.discount}
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.id}>
                            {item.title} (Quantity: {item.quantity})
                        </li>
                    ))}
                </ul>
            </div>
            <ExpandableText >Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Voluptas, architecto? Molestiae culpa obcaecati non? Iure
                 aliquid illo nesciunt eligendi, error voluptas quaerat. Consequuntur
                  aliquam ut maiores amet, quod nobis expedita, temporibus architecto 
                  omnis impedit pariatur dolorum vel asperiores accusantium rerum 
                  consectetur sunt itaque eaque aliquid, culpa repudiandae totam aspernatur
                   excepturi reprehenderit? Minima veniam expedita sint iure, nemo sit omnis itaque. 
                   Natus excepturi error, a dolore, et eligendi modi esse, magnam ipsam sunt quam cum 
                   sapiente nihil odit voluptates delectus placeat. Deserunt, perferendis! At, quam, 
                   eveniet provident quos, dolorum impedit facere aliquam ea tenetur earum aliquid deleniti 
                    autem dolores nostrum maxime!</ExpandableText>
    </>
);
}
export default App;