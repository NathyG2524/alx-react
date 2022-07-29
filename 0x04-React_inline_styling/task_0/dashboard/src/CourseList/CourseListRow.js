import React from "react";
import PropTypes from 'prop-types';

export default function CourseListRow(props) {
    const rowStyle = {
        backgroundColor: '#f5f5f5ab'
    }
    const headStyle = {
        backgroundColor: '#deb5b545'
    }
    if (props.isHeader) {
        if ( props.textSecondCell  == null) {
            return (
                <tr ><th colSpan="2" style={ headStyle}>{props.textFirstCell}</th></tr>
            );
        }
        return (
            <tr style={ rowStyle}>
            <th style={ headStyle}>{props.textFirstCell}</th>
            <th style={ headStyle}>{props.textSecondCell}</th>
          </tr>
          );
    }
    return (
        <tr style={ rowStyle}>
            <td>{props.textFirstCell}</td>
            <td>{props.textSecondCell}</td>
          </tr>);
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
  }
  
CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };