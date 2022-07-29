import PropTypes from 'prop-types'
import React, { Component } from 'react'

const WithLogging = ( WrappedComponent) => {
    const dName = WrappedComponent.displayName
    if (WrappedComponent.displayName){
        dName = WrappedComponent.displayName
    }
    else{
        dName = 'component'
    } 

    class NewComponent extends Component {
        componentDidMount() {
            console.log(`Component ${dName} is mounted`)
        }
        componentWillUnmount() {
            console.log(`Component ${dName} is going to unmount`)
        }   
        
        render () {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
    return NewComponent
}
export default WithLogging
