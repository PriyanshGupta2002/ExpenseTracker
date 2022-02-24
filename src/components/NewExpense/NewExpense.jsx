import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {

  const [isEditing, setisEditing] = useState(false)

  const startEditingHandler=()=>{
    setisEditing(true)
  }
  const cancelForm=()=>{
    setisEditing(false)
  }
  return (
    <div className='new-expense'>
       {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    {isEditing && <ExpenseForm addExpense={props.addExpense} cancelForm={cancelForm}/>}
    </div>
  )
}

export default NewExpense