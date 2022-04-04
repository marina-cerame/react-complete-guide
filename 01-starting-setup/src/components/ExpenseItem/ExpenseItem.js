import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 4);
  const expenseTitle = 'Udemy Course';
  const expenseAmount = 20.0;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
