import React from 'react'

/**
 * About page
 */
const About = () => <p>About</p>

About.loadData = (match) => Promise.resolve({ data: 2, match })

export default About
