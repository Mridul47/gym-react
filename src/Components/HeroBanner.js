import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}}position='relative' p='20px'>
        <Typography color='#b36dd1' fontWeight='600' fontSize='26px'>
            Fitness Hub
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb='23px' mt='30px'>
            Grind, Hustle <br/> and Repeat the cycle.
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Checkout the most effective exercises.
        </Typography>
        <Button variant='contained' color='secondary' href='#exercises'
        sx={{backgroundColor:'#4b245c', padding:'10px'}}>Explore Exercises</Button>
        <Typography 
            fontWeight={600}
            color='#b36dd1'
            sx={{
                opacity: 0.1,
                display:{lg:'block', xs:'none'}
            }}
            fontSize='200px'>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner