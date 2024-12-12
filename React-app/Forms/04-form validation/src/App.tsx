
import { useState } from "react";
import ExpenceList from "./expence-tracker/ExpenceList";
import ExpenceFilter from "./components/ExpenceFilter";
import ExpenceForm from "./components/ExpenceForm";
import categories from "./categoris";
function App(){
    const [selectedCategory,setSelectedCategory]=useState('');
    const [expenses,setExpenses]=  useState([
        {id:1,description:'mee',amount:20,category:'entertainment'},
        {id:2,description:'yoo',amount:15,category:'utilities'},
        {id:3,description:'too',amount:10,category:'utilities'},
        {id:4,description:'zoo',amount:5,category:'utilities'},
    ])
    const visibleExpenses=selectedCategory ? 
    expenses.filter((t)=>t.category===selectedCategory)
    :expenses;

  
        

    return(
        <>
        <div className="mb-5">
            <ExpenceForm onSubmit={expense=>setExpenses([...expenses, {...expense,id:expenses.length+1}])}/>
        </div>
        <div className="mb-3">
            <ExpenceFilter onSelectCategory={category=>setSelectedCategory(category)}/>
            </div>
        <ExpenceList expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter(e=>e.id !==id))}/>
        </>
    );
}
export default App;