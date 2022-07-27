import App from '../App/App';
import { shallow } from 'enzyme';
import "./Header.css"
import Header from './Header'

const wrapper = shallow(<Header />);

describe('App content', () => {


    it("App renders a div with the class: App-header", () => {
        expect.exist(wrapper.find('.App-header'))
    })



})
