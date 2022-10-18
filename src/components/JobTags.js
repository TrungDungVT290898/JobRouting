import React from 'react'
import JobTag from './JobTag'

import { Grid, Divider, Item } from '@mui/material'
import { Container } from '@mui/system'
function JobTags ({ jobs }) {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 5, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ margin: 10, padding: 10 }}
      >
        {jobs.map(job => (
          <Grid
            item
            xs={2}
            sm={4}
            md={6}
            key={`${job.id}`}
            sx={{
              backgroundColor: 'inherit',
              textAlign: 'center',
              height: 300
            }}
          >
            <JobTag job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default JobTags
