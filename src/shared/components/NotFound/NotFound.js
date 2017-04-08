import React from 'react'
import { Route } from 'react-router'

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) staticContext.status = code
    return children
  }} />
)

const NotFound = () => (
  <Status code={404}>
    <p>Not Found</p>
  </Status>
)

export default NotFound
