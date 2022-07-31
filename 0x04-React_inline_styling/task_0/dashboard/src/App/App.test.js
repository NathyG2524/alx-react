import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';

const wrapper = shallow(<App />);

describe('App content', () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper)
    })

    // it("App renders a div with the class: App-header", () => {
    //     const wrapper = shallow(<App />);
    //     expect.anything(wrapper.find('.App-header'))
    // })

    // it("App renders a div with the class: App-body", () => {
    //     const wrapper = shallow(<App />);
    //     expect.anything(wrapper.find('.App-body'))
    // })

    // it("App renders a div with the class: App-footer", () => {
    //     const wrapper = shallow(<App />);
    //     expect.anything(wrapper.find('.App-footer'))
    // })
    it("contain Notification component", () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper.find(<Notification/>))
    })
    it("contain Header component", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(<Header/>))
    })
    it("contain Footer component", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find(<Footer/>))
    })
    it("contain Login component", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(<Login/>))
    })
    it("alert logOut when ctl and h is pressed", () => {
        
    })

})

