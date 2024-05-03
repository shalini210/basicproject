import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup';
import { Countereg } from './components/Countereg';
import { AccountComponent } from './components/AccountComponent';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Countereg/> */}
      <AccountComponent></AccountComponent>
    </div>
  );
}

export default App;
