import React,{useState} from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
const Expenses = (props) => {
const [filteredYear, setfilteredYear] = useState(2022)

const changeYear=(Year)=>{
  setfilteredYear(Year)
}

    const filteredExpenses=props.expenses.filter((expense)=>{
    return  expense.date.getFullYear().toString()===filteredYear.toString()
    })

  return (
    <Card className='expenses'>
      <ExpensesFilter changeYear={changeYear} filteredYear={filteredYear}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  )
}

export default Expenses