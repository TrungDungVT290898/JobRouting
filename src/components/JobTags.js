import React from 'react'
import JobTag from './JobTag'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'
function JobTags ({ jobs }) {
  return (
    <Grid sx={{ paddingTop: 2 }} container spacing={2}>
      {jobs.map(j => (
        <Grid item key={`job_grid_${j.id}`} xs={8} md={4}>
          <JobTag key={`job_${j.id}`} job={j} />
        </Grid>
      ))}
    </Grid>
  )
}

export default JobTags
