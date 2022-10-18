import React from 'react'
import JobTag from './JobTag'

import { Grid } from '@mui/material'

function JobTags ({ jobs }) {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        width: '80%',
        margin: 'auto'
      }}
      container
      spacing={4}
    >
      {jobs.map(j => (
        <Grid item key={`job_grid_${j.id}`} sx={{ marginTop: '20px' }}>
          <JobTag key={`job_${j.id}`} job={j} />
        </Grid>
      ))}
    </Grid>
  )
}

export default JobTags
