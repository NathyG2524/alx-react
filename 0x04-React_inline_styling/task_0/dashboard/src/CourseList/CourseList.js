import React from 'react';
import CourseListRow from './CourseListRow';
import {CourseShape} from './CourseShape';
import PropTypes from 'prop-types';

function CourseList(props) {
  return (
    <table>
        <thead>
            <CourseListRow textFirstCell="Available courses" isHeader={true}/>
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody>{
          (props.listCourses.length == 0) ? <CourseListRow isHeader={false} textFirstCell='No course available yet' />
          : (props.listCourses.map((course) => {
            return <CourseListRow isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} key={course.id} />
          }))
          }
        {/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false}/>
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false}/>
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false}/>  */}
        </tbody>
    </table>
  )
}

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propsTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

export default CourseList
