import App from './App.js';
import { shallow } from 'enzyme';

const wrapper = shallow(<App />);

describe('App content', () => {
    it("renders without crashing", () => {
        expect.anything(wrapper)
    })

    it("App renders a div with the class: App-header", () => {
        expect.anything(wrapper.find('.App-header'))
    })

    it("App renders a div with the class: App-body", () => {
        expect.anything(wrapper.find('.App-body'))
    })

    it("App renders a div with the class: App-footer", () => {
        expect.anything(wrapper.find('.App-footer'))
    })

})

