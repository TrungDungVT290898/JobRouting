import React from 'react'
import JobTag from './JobTag'

import { Grid } from '@mui/material'
function JobTags ({ jobs }) {
  return (
    <Grid
      sx={{
        padding: 2,
        margin: 2,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap'
      }}
      container
      spacing={2}
    >
      {jobs.map(j => (
        <Grid item key={`job_grid_${j.id}`} xs={8} md={4}>
          <JobTag key={`job_${j.id}`} job={j} />
        </Grid>
      ))}
    </Grid>
  )
}

export default JobTags
