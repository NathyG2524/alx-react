import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";



describe('App content', () => {


    it("App renders a div with the class: App-body", () => {
        const wrapper = shallow(<Login />);
        expect.anything(wrapper.find('.App-body'))
    })

    it("verify that the componets renders 2 input tags and label tags", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toEqual(2);
        expect(wrapper.find('input').length).toEqual(2);
    })
})
