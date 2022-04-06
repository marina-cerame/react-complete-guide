import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const onFilterSelectHandler = (filter) => {
    setFilteredYear(filter);
  };

  // Apply year filter
  const filteredItems = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // Set filter output
  let expensesContent = <p>No expenses found for {filteredYear}.</p>;
  if (filteredItems.length) {
    expensesContent = filteredItems.map((e) => (
      <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.id} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterSelect={onFilterSelectHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
