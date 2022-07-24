import { Box } from '@chakra-ui/react'
import React from 'react'
import MiddlePart from '../compoments/MiddlePart'
import Navbar from '../compoments/Navbar'

const HomePage = () => {
  return (
    <Box>
        <Navbar/>
        <MiddlePart/>
    </Box>
  )
}

export default HomePage