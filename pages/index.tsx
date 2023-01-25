import * as React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { TravelExplore as TravelExploreIcon } from '@mui/icons-material';
import { EnhancedTripForm, Itinerary } from '../components';

const Home = () => {
  const [itinerary, setItinerary] = React.useState<string>('');

  const handleSetItinerary = (value: string) => {
    setItinerary(value);
  };

  return (
    <>
      <Avatar sx={{ mb: 1, bgcolor: 'primary.main' }}>
        <TravelExploreIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Trip Planner
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 6 }}>
        Plan your vacation or road trip with ChatGPT
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <EnhancedTripForm onSubmitCallback={handleSetItinerary} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Itinerary itinerary={itinerary} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
