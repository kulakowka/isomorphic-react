import React from 'react'

const User = () => <p>User</p>

User.loadData = (match) => Promise.resolve({ data: 3, match })

export default User
