import React from "react";
import "./Notifications.css"
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from "./NotificationItem";
import PropsTypes from 'prop-types';

export default function Notification(props) {
    return (
        <div>
            <div className="menuItem">
            Your notifications
            </div>
            {(props.displayDrawer) && 
            (<div className="Notifications">
                <button style={{ float: 'right', background: 'none', border: "none" }} arial-label='Close' onClick={() => console.log('Close button been clicked')}>
                    <img style={{ width: '15px', height: '15px' }} src={close} alt="close" />
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem type="urgent" html={getLatestNotification()} />
                </ul>
            </div>)}
            
        </div>
    )
}

Notification.defaultProps = {
    displayDrawer: true
}

Notification.propsTypes = {
    displayDrawer: PropsTypes.bool
}