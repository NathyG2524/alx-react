import React from 'react'
import PropTypes from 'prop-types'

function CourseShape(props) {
  return (
    <div>CourseShape</div>
  )
}

CourseShape.propTypes = {
    id : PropTypes.number,
    name: PropTypes.string,
    credit: PropTypes.number
}

export default CourseShape
