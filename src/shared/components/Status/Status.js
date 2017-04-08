import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) staticContext.status = code
    return children
  }} />
)

Status.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.number.isRequired
}

export default Status
