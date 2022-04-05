import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: 'Udemy course', amount: '20.00', date: new Date(2022, 3, 4) },
    { title: 'Dice', amount: '12.59', date: new Date(2022, 2, 12) },
    { title: 'Dice (fancy)', amount: '76.82', date: new Date(2022, 1, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
