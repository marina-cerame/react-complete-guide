import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </div>
  );
}

export default Expenses;
