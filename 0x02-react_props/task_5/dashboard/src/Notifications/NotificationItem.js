import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  return(
     (props.value) ? (<li data-notification-type={props.type}>{props.value}</li> ):
    (<li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>)
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