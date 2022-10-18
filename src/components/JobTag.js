import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Chip, Divider, Paper } from '@mui/material'
import { border, borderColor, display } from '@mui/system'

function VariantButtonGroup ({ job }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
    >
      {job.skills.slice(0, 4).map(s => (
        <Chip
          label={s}
          sx={{
            fontSize: 10,
            margin: 0.5,
            backgroundColor: 'tomato',
            color: 'white'
          }}
          key={`button-${job.title}-${s}`}
        />
      ))}
    </Box>
  )
}
function JobTag ({ job }) {
  return (
    <Paper
      sx={{
        backgroundColor: '#353535',
        color: 'white',
        marginTop: '20px'
      }}
    >
      <Card
        variant='outlined'
        sx={{
          backgroundColor: 'inherit',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color='white' gutterBottom>
            {job.title}
          </Typography>
          <Divider />
          <Typography variant='h5' component='span'>
            <VariantButtonGroup job={job} />
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1
              }
            }}
          >
            <Typography sx={{ fontSize: 16 }} color='white' gutterBottom>
              {job.description}
            </Typography>
          </Box>
        </CardContent>
        {/* <CardActions>
          <Button>Learn More</Button>
        </CardActions> */}
      </Card>
    </Paper>
  )
}
export default JobTag
