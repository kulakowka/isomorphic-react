import React from 'react'
import Status from '../Status'
import Paper from '../Paper'

const NotFound = () => (
  <Status code={404}>
    <Paper>
      <h1>Not Found</h1>
    </Paper>
  </Status>
)

export default NotFound
