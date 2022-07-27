import React from "react";
import {shallow} from "enzyme";
import "./Notifications.css"

import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
    it('renders without crasing', () => {
        shallow(<NotificationItem />);
    })
    it('renders correct html', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test'/>);
        expect(wrapper.html()).toBe("<li data-notification-type='defualt'>test</li>")

    })

    it('renders the correct html when passing dummy html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);

        expect(wrapper.html()).toBe("<li><u>test</u></li>")
    })
})
