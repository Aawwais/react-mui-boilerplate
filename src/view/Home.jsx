import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { decrement, increment } from '../store/actions/authAction';
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  let dispatch=useDispatch()
  const {counter}=useSelector((state)=>state.authUser)

  const handleIncrement = () => {
    let count=counter+1
    dispatch(increment(count))
  };

  const handleDecrement = () => {
    let count=counter-1
    dispatch(decrement(count))
  };
  const logout = () => {
    dispatch(logoutUser());
    dispatch(resetAllSlices());
  };
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    className="home"
  >
    <Typography variant="h1" className="text-3xl font-bold mb-4">Counter App</Typography>
    <Button onClick={logout} variant="contained" color="primary">Logout</Button>
    <Box display="flex" alignItems="center" mb={4} mt={4}>
      <Button onClick={handleDecrement} variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">-</Button>
      <Typography variant="span" mx={2} className="mx-4 text-2xl font-bold">{counter}</Typography>
      <Button onClick={handleIncrement} variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">+</Button>
    </Box>
    <Typography variant="body1">Click here to go to the About page</Typography>
    <Link to="/about" component={Button} variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white font-bold py-2 px-4 rounded">About</Link>
  </Box>
  )
}

export default Home
