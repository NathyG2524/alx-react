import React from 'react';
import Notification from "./Notifications";
import { shallow } from 'enzyme';
import { listNotifications } from '../App/App';

const wrapper = shallow(<Notification />);
const notifLength = listNotifications.length
describe('Notifications Component', () => {
  it("renders without crashing", () => {
  expect(wrapper)
  })

  it("renders three list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(notifLength);
  })

  it("renders the text: 'Here is the list of notifications'", () => {
    const text = wrapper.find('div p')
    expect(text.text()).toBe('Here is the list of notifications');
  })
  it("menu item is being displayed when displayDrawer is false", () => {
    const text = wrapper.find('div p')
    expect(text.text()).toBe('Here is the list of notifications');
  })



})