import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup';
import { Countereg } from './components/Countereg';
import { AccountComponent } from './components/AccountComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <UserComponent></UserComponent>
      {/* <Signup/> */}
      {/* <Countereg/> */}
      {/* <AccountComponent></AccountComponent> */}
    </div>
  );
}

export default App;
