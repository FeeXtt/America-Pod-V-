import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export default function JidelniKarta(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={2}>
          {props.volume}
        </Grid>
        <Grid xs={8}>
          {props.item}
        </Grid>
        <Grid xs={2}>
          {props.prize},-
        </Grid>
      </Grid>
    </Box>
  );
}
