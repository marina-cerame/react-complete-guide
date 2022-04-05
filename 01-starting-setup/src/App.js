import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Udemy course', amount: '20.00', date: new Date(2022, 3, 4) },
    { title: 'Dice', amount: '12.59', date: new Date(2022, 2, 12) },
    { title: 'Dice (fancy)', amount: '76.82', date: new Date(2022, 1, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
