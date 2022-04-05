import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
}

export default Expenses;
