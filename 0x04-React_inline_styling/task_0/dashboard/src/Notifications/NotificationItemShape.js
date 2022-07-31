import PropsTypes from 'prop-types';
import React from 'react';

export const NotificationItemShape = PropsTypes.shape({
 id: PropsTypes.number.isRequired,
 html: PropsTypes.shape({ __html: PropsTypes.string}),
 type: PropsTypes.string.isRequired,
 value: PropsTypes.string.isRequired
}) 