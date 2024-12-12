import React from 'react'
import categories from '../categoris'
interface expense{
    id:number,
    description:string,
    amount:number,
    category:string
}
interface props{
    expenses:expense[],
    onDelete:(id:number)=>void;
}

const ExpenceList = ({expenses,onDelete}:props) => {
    if(expenses.length===0) return null;
  return (
   <table className="table table-bordered">
    <thead>
        <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
        </tr>
        
    </thead>
    <tbody>
{expenses.map(expense=><tr key={expense.id}>
    <td> {expense.id}</td>
    <td> {expense.amount}</td>
    <td> {expense.category}</td>
    <td>
<button 
onClick={()=>onDelete(expense.id)} 
className="btn btn-outline-danger">
    Delete</button> </td>
</tr>)}

    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$ {expenses.reduce((acc,expense)=>expense.amount+acc,0).toFixed(2)} </td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
   </table>
  )
}

export default ExpenceList