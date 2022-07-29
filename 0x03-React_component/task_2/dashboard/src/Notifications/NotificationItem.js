import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  console.log(props)
  return(
    // console.log(props.key)
    //  (props.value) ? 
    //  (<li data-notification-type={props.type}  onClick={()=>props.markAsRead(props.id)}>{props.value} </li> )
    //  :
    // (<li data-notification-type={props.type} dangerouslySetInnerHTML={props.html} onClick={()=>props.markAsRead(props.id)}></li>)
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}
    onClick={()=>props.markAsRead(props.id)}>{props.value}</li>
    )
};


NotificationItem.defaultProps = {
  type: "default"
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string
}

export default NotificationItem