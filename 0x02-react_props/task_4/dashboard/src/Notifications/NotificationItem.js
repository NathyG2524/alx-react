import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem(props) {
  return(
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>
  )
}

NotificationItem.defaultProps = {
  type: "default"
}

NotificationItem.propsTypes = {
  html: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}