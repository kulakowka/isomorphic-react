import React from 'react'
import Status from '../Status'
import Paper from '../Paper'

const NotFound = () => (
  <Status code={404}>
    <Paper>Not Found</Paper>
  </Status>
)

export default NotFound
