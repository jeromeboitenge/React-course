import React from "react";



interface Props{
    name:string;
}
function Welcome({name}:Props){
    return <h2 className="greet">Welcome, {name}</h2>;
}
export default Welcome;