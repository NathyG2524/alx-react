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
import { getLatestNotification } from '../utils/utils'



export const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 60}
]

export const listNotifications = [
  {id: 1, value: "New course ", type: "default"},
  {id: 2, value: "New resume available", type: "urgent"},
  {id: 3, html: getLatestNotification()  , type: "urgent"},
]
console.log(listNotifications)
function App(props) {
  // let isLoggedIn = false;
  // console.log(isLoggedIn)
  return (
    <React.Fragment>
    <Notifications listNotifications={listNotifications} />
    <div className='App'>
      <Header />
      <div className='App-body'> 
      {(props.isLoggedIn) ? <CourseList listCourses={listCourses}/> :<Login />}
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

