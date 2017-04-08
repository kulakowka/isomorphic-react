import React from 'react'
import Paper from '../Paper'

/**
 * About page
 */
const About = () => (
  <Paper>
    <h1>About</h1>
  </Paper>
)

About.loadData = (match) => Promise.resolve({ data: 2, match })

export default About
