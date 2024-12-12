import React from "react";
import Message from "./components/message";
import Welcome from "./components/Welcome";
import Button from "./components/Button";
function App(){
  
const clicked=() =>{
  alert('Button clicked');
};
  return(<>
  <div>
   <Message/> 
  </div>
  <div>
  <Welcome name="boitenge"/>
  </div>
  <Button onclick={clicked} label="click"/>
  </>
);
}
export default App;