import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense management</h1>
        <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
