import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterSelect={onFilterSelectHandler}
      />
      <ExpensesList filteredItems={filteredItems} />
    </Card>
  );
};

export default Expenses;
