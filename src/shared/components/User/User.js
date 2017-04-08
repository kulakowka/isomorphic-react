import React from 'react'
import Paper from '../Paper'

const User = () => (
  <Paper>
    <h1>User</h1>
  </Paper>
)

User.loadData = (match) => Promise.resolve({ data: 3, match })

export default User
