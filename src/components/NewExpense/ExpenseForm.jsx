import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
const [title, settitle] = useState("")
const [amount, setamount] = useState("")
const [date, setDate] = useState("")
const handleSubmit=(e)=>{
e.preventDefault()
if (!title || !amount || !date) {
  alert("All fields are mandatory")
}

else{
  const expenseData={
    title:title,
    amount:+amount,
    date:new Date(date)
  }
  props.addExpense(expenseData)
}
settitle("")
setamount("")
setDate("")

}
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"  value={title} onChange={(e)=>{settitle(e.target.value)} } />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input type="number" name="amount" id="title"  value={amount} min="0.01" step="0.01"  onChange={(e)=>{setamount(e.target.value)}} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2023-12-31' value={date} 
            onChange={(e)=>{setDate(e.target.value)}}
          />
          
        </div>
      </div>
      <div className="new-expense__actions" >
      
        <button type='button' onClick={()=>{props.cancelForm()}}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm