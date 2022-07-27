import './App.css';
import '../Footer/Footer.css';
import '../Login/Login.css';
import "../CourseList/CourseList.css";
import '../Header/Header.css'
import  Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import React from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';


function App(props) {
  // let isLoggedIn = false;
  // console.log(isLoggedIn)
  return (
    <React.Fragment>
    <Notifications />
    <div className='App'>
      <Header />
      <div className='App-body'> 
      {(props.isLoggedIn) ? <CourseList /> :<Login />}
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
        
    </div>
    </React.Fragment>


  );
}

App.defaultProps = {
  isLoggedIn: true
}

export default App;

