import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const EXAMPLE_EXPENSES = [
  {
    title: 'Udemy course',
    amount: '20.00',
    date: new Date(2021, 3, 4),
    id: 1,
  },
  {
    title: 'Dice',
    amount: '12.59',
    date: new Date(2020, 2, 12),
    id: 2,
  },
  {
    title: 'Dice (fancy)',
    amount: '76.82',
    date: new Date(2022, 1, 28),
    id: 3,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXAMPLE_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
