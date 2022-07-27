import React from 'react';
import CourseList from "./CourseList";
import { shallow } from 'enzyme';


describe('CourseList', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper)
    });
    it('renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('table thead').children().length).toEqual(2);
        expect(wrapper.find('table tbody').children().length).toEqual(3);
    });
})