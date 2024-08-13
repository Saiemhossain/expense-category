import { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';


/* eslint-disable no-unused-vars */
function App() {
 
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'tour', description: 'test', amount: 100 },
    { id: 2, category: 'tour', description: 'test', amount: 600 },
    { id: 3, category: 'utility bill', description: 'test', amount: 100 },
    { id: 4, category: 'personal expense', description: 'test', amount: 100 },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');

  const fillterExpenses = selectedCategory ? expenses.filter(data => data.category === selectedCategory) : expenses;

  return (
    <>
     <ExpenseFilter  onSelectedCatagory ={(category) => setSelectedCategory(category)} />
      <ExpenseList data={fillterExpenses} onDelete= {(id) => setExpenses(expenses.filter(data => data.id !== id ))} />
    </>
  );
}

export default App;
