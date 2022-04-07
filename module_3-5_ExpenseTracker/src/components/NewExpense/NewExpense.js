import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    // Display form
    setShowForm(true);
  };

  const cancelHandler = () => {
    // Hide form
    setShowForm(false);
  };

  const saveExpenseHandler = (expense) => {
    // Pass up to App component
    onAddExpense(expense);

    // Close form
    setShowForm(false);
  };

  let newExpenseContent = (
    <button type="button" onClick={showFormHandler}>
      Add New Expense
    </button>
  );

  if (showForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={saveExpenseHandler}
        onCancel={cancelHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
