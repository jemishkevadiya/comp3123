import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greetings from './Greetings';
import SayHello from './SayHello';

function App() {
  return (
    <div className='App'>
    <img src={logo} alt='App logo'/>
      <h1>Hello</h1>
      <h1>Test</h1>
      <Welcome></Welcome>
      <Greetings name = "Jemish"/>
      <SayHello fname = "Jemish" lname = "Kevadiya"/>
      <SayHello fname = "Mansi" lname = "Kevadiya"/>
    </div>
  );
}

export default App;
