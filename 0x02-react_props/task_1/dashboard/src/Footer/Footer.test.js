import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

const wrapper = shallow(<Footer />);

describe('App content', () => {

    it("App renders a div with the class: App-footer", () => {
        expect.anything(wrapper.find('.App-footer'))
    })
    it("Verify that the components at the very least render the text 'Copyright'", () => {
        expect(wrapper.text().substring(0,9)).toBe('Copyright');
    })

})
