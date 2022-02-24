import { useState,useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



function App() {
  let initExpenses=[]
  if (localStorage.getItem("expenses")===null) {
    initExpenses=[]
    }
    else{
      initExpenses=JSON.parse(localStorage.getItem("expenses"))
    }
  const addExpense=(expenseData)=>{
    let id;
    if (expenses.length===0) {
      id=0
    }
    else{
      id=expenses.length+1
    }
    const newExpense={
      id:id,
      title:expenseData.title,
      amount:expenseData.amount,
      date: expenseData.date
    }
    setExpenses([newExpense,...expenses])
  }
  
  const [expenses, setExpenses] = useState(initExpenses)
  useEffect(() => {
  localStorage.setItem("expenses",JSON.stringify(expenses))

  }, [expenses])
  

  
  return (
    <>
    
    <NewExpense addExpense={addExpense}/>

  
    <div>
      <Expenses expenses={expenses} />
    </div>
    </>
  );
}

export default App;
