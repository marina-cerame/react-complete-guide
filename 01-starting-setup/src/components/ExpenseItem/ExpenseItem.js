import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 4, 2022</div>
      <div className="expense-item__description">
        <h2>Udemy course</h2>
        <div className="expense-item__price">$20.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
