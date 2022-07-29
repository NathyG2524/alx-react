import React from "react";
import "./Notifications.css"
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from "./NotificationItem";
import PropsTypes from 'prop-types';
import { NotificationItemShape } from "./NotificationItemShape";

export default class Notification extends React.Component {
    constructor (props) {
        super(props);
        // this.markAsRead = this.markAsRead.bind(this)
    }
    
    static propTypes = {
        markAsRead: PropsTypes.func
      }

      shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
      }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }
    render() {

    
    const printN = ()  => {
        // console.log(props.listNotifications)
         if (this.props.listNotifications.length == 0) {
            return <NotificationItem value="new notification for now" /> 
         }
         else {
            
            let noti = (this.props.listNotifications.map((notify) => {
                    // console.log(notify.id)
                    if ((notify.html != undefined && notify.html.__html != null)) {
                        return (<NotificationItem type={notify.type}  html={notify.html } id={notify.id} key={notify.id} markAsRead={this.markAsRead}/>) 
                    }
                    else {
                        return (<NotificationItem type={notify.type} value={notify.value} id={notify.id} key={notify.id} markAsRead={this.markAsRead}/>)
                    }
                        
              
                        
                    
                }))
                return noti
         }
            

    }

    
    return (
        <div>
            <div className="menuItem">
                Your notifications
            </div>
            {(this.props.displayDrawer) &&
                (<div className="Notifications">
                    <button style={{ float: 'right', background: 'none', border: "none" }} arial-label='Close' onClick={() => console.log('Close button been clicked')}>
                        <img style={{ width: '15px', height: '15px' }} src={close} alt="close" />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {
                            printN()
                            // console.log(props.listNotifications)
                             
                            // (props.listNotifications.length == 0) ?
                                // <NotificationItem value="new notification for now" /> : null
                                
                                
                            //         (props.listNotifications.map((notify) => {
                            //             console.log(notify)
                            //             ((notify.html != undefined && notify.html.__html != null)) ?
                                        
                                         
                            //             <NotificationItem type={notify.type}  html={notify.html } key={notify.id} /> :
                                         
                            //             <NotificationItem type={notify.type} value={notify.value} key={notify.id} />
                            //         })) 
                                    // (props.listNotifications.map((notify) => {
                                        
                                    //     return <NotificationItem type={notify.type} value={notify.value} key={notify.id} />
                                    // }))
                        }
                        {/* // <NotificationItem type="default" value="New course available" />
                    // <NotificationItem type="urgent" value="New resume available" />
                    // <NotificationItem type="urgent" html={getLatestNotification()} /> */}
                    </ul>
                </div>)}

        </div>
    )}
}

Notification.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}

Notification.propsTypes = {
    displayDrawer: PropsTypes.bool,
    listNotifications: PropsTypes.arrayOf(NotificationItemShape)
}