import './App.css';
import '../Footer/Footer.css';
import '../Login/Login.css';
import  Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import React from 'react';


function App() {
  return (
    <React.Fragment>
    <Notifications />
    <div className='App'>
      <Header />
      <div className='App-body'> 
      <Login />
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
        
    </div>
    </React.Fragment>


  );
}

export default App;
