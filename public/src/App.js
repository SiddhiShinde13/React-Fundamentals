import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import { FirstComponents } from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/* <Welcome name ="John Doe"/>
      <Welcome name ="Jane Smith"/> */}
      <Greetings name = "Ramesh" />
      <Greetings />
      <FirstComponents />
    </div>
  );
}

export default App;
