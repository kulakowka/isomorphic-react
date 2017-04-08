import React from 'react'

const About = () => <p>About</p>

About.loadData = (match) => Promise.resolve({ data: 2, match })

export default About
