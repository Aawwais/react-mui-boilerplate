import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const About = () => {
  return (
    <Box m={4}>
      <p>Click here to go to the home page</p>
      <Link to="/" component={Button} variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white font-bold py-2 px-4 rounded">Home</Link>
    </Box>
  )
}

export default About
