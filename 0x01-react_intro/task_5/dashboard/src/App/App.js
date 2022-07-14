import logo from './holbert.jpg';
import './App.css';

import {getFooterCopy, getFullYear} from './utils.js';



function App() {
  return (
    <div>
      <div className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'> 
      <p>
      Login to access the full dashboard
      </p>
      <label htmlFor='email'>Email</label>
      <input id="email" type="email"></input>
      <label htmlFor='password'>Password</label>
      <input id="password" type="password"></input>
      <button>ok</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
        
    </div>


  );
}

export default App;
