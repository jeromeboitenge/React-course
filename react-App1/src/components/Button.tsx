import React from "react";
interface ButtonProps{
    onclick:()=>void;
    label:string;
}
function Button({onclick, label}:ButtonProps){
    return <button onClick={onclick}> {label}</button>

}
export default Button;