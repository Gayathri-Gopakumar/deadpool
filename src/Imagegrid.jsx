import React from 'react';
import { Grid } from '@mui/material';

const Imagegrid = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={8}>
        <img 
          style={{width: '100%', height: 'auto'}} 
          className='p-5 ' 
          src="https://variety.com/wp-content/uploads/2024/07/MCDDEAN_WD044.jpg?w=1000&h=667&crop=1" 
          alt="Image 1" 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <img 
          style={{width: '100%', height: 'auto'}} 
          className='p-5 shadow' 
          src="https://www.digitaltrends.com/wp-content/uploads/2024/04/Deadpool-and-Wolverine-poster-3.jpg?fit=486%2C720&p=1" 
          alt="Image 2" 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <img 
          style={{width: '100%', height: '100%'}} 
          className='p-5 shadow' 
          src="https://lumiere-a.akamaihd.net/v1/images/p_deadpool_wolverine_snuggle_gen_v2_c251bde1.png" 
          alt="Image 3" 
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <img 
          style={{width: '100%', height: 'auto'}} 
          className='p-5 ' 
          src="https://lumiere-a.akamaihd.net/v1/images/deadpool_wolverine_mobile_640x480_ad8020fd.png" 
          alt="Image 4" 
        />
      </Grid>
    </Grid>
  );
};

export default Imagegrid;
