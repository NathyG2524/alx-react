import App from '../App/App';
import { shallow } from 'enzyme';

const wrapper = shallow(<App />);

describe('App content', () => {

    it("App renders a div with the class: App-footer", () => {
        expect.anything(wrapper.find('.App-footer'))
    })

})
