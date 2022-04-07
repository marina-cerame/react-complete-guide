import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ filteredItems }) => {
  if (filteredItems.length === 0) {
    return <p>No expenses found.</p>;
  }

  return filteredItems.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.id} />
  ));
};

export default ExpensesList;
