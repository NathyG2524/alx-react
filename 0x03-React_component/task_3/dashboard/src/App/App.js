import './App.css';
import '../Footer/Footer.css';
import '../Login/Login.css';
import "../CourseList/CourseList.css";
import '../Header/Header.css'

import  Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'

import React from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils'
import BodySection from '../BodySection/BodySection';



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
class App extends React.Component {
  // let isLoggedIn = false;
  // console.log(isLoggedIn)
 static propTypes = {
 logOut: PropTypes.func,
 
}

static defaultProps = {
  logOut: () => {},
  isLoggedIn: true
}

componentDidMount() {
  this.alert()
}

alert() {
  document.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (e.ctrlKey && e.code =='KeyH'){
      this.props.logOut()
      alert('Logging you out')
    }
  })
}

componentWillUnmount() {
  window.removeEventListener('keydown', alert)
}

  render () {
    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className='App'>
        <Header />
        <div className='App-body'> 
        {this.props.isLoggedIn ? 
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={listCourses}/></BodySectionWithMarginBottom> 
        :<BodySectionWithMarginBottom title="Log in to continue">
        <Login /></BodySectionWithMarginBottom>}
        <BodySection title='News from the School' ><p>You will take each course for a trimester </p> </BodySection>
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
          
      </div>
      </React.Fragment>
  
  
    );
  }
 
}

export default App;
