import React from 'react'

const Home = () => (
  <p>Home 1</p>
)

Home.loadData = (match) => Promise.resolve({ data: 1, match })

export default Home
