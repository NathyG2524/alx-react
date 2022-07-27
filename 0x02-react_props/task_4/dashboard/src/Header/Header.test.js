import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import "./Header.css"

const wrapper = shallow(<Header />);

describe('App content', () => {


    it("App renders a div with the class: App-header", () => {
        expect.anything(wrapper.find('.App-header'))
    })
    it("check for the and img tag", () => {
        expect(wrapper.find('img').exists()).toEqual(true);
        expect(wrapper.find('h1').exists()).toEqual(true);
    })


})
