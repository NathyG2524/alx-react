import React from 'react';
import Notification from "./Notifications";
import { shallow } from 'enzyme';

const wrapper = shallow(<Notification />);

describe('Notifications Component', () => {
  it("renders without crashing", () => {
  expect(wrapper)
  })

  it("renders three list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(3);
  })

  it("renders the text: 'Here is the list of notifications'", () => {
    const text = wrapper.find('div p')
    expect(text.text()).toBe('Here is the list of notifications');
  })



})