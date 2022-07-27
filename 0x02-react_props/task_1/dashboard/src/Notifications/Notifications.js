import React from "react";
import "./Notifications.css"
import close from '../assets/close-icon.png'
import {getLatestNotification} from '../utils/utils'

export default function Notification () {
    return (
        <div>
            <div className="Notifications">
            <button style={{ float:'right', background: 'none', border:"none"}} arial-label='Close' onClick={()=>console.log('Close button been clicked')}>
                <img style={{width: '15px', height: '15px'}} src={close} alt="close"/>
            </button>
                <p>Here is the list of notifications</p>
                <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={getLatestNotification()}/>

                </ul>
            </div>
        </div>
    )
}