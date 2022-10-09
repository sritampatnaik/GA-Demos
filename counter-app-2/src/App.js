import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <Counter initialCount={1} />
      <Counter initialCount={2} />
    </div>
  );
}

export default App;
