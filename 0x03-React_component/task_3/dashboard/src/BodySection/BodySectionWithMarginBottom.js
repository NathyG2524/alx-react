import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './BodySection.css'
import BodySection from './BodySection'

export default class BodySectionWithMarginBottom extends Component {
     

  render() {
    return (
      <div className='BodySectionWithMarginBottom' {...this.props}>
        <BodySection {...this.props}></BodySection>
        </div>
    )
  }
}
