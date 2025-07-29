import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import { FirstComponents, SecondComponents } from './components/MyComponents';
import HelloWorld from './components/HelloWolrd';
import Student from './components/student';
import EventHandling from './components/EventHandling'; 
import ConditionalRendering from './components/ConditionalRendering';
function App() {
  return (
    <div className="App">
      {/* <Welcome name ="John Doe"/>
      <Welcome name ="Jane Smith"/>
      <Greetings name = "Ramesh" />
      <Greetings />
      <FirstComponents />
      <SecondComponents /> 
      <HelloWorld />
      <Student
      firstName="John"
      lastName="Doe"
      email="john.doe@example.com"
      <EventHandling />*/}
      <ConditionalRendering />
    </div>
  );
}

export default App;
