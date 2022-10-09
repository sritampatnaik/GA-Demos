import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Functional Component</h1>
        <Card title="Card Title 1" desc="Description 1" ></Card>
        <Card title="Card Title 2" desc="Description asdadasda" ></Card>
      </header>
    </div>
  );
}

export default App;
