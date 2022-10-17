import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ButtonGroup from '@mui/material/ButtonGroup'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

function VariantButtonGroup ({ job }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'space-between'
      }}
    >
      {job.skills.slice(0, 4).map(s => (
        <Button
          sx={{
            fontSize: 10,
            margin: 0.5,
            backgroundColor: 'tomato',
            color: 'white'
          }}
          key={`button-${job.title}-${s}`}
        >
          {s}
        </Button>
      ))}
    </Box>
  )
}
function JobTag ({ job }) {
  return (
    <Card variant='outlined' sx={{ width: 'fit-content' }}>
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
            {job.title}
          </Typography>
          <Typography variant='h5' component='span'>
            <VariantButtonGroup job={job} />
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'></Typography>
          <Typography variant='body2'>{job.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              alignSelf: 'center',
              backgroundColor: '#FFA726',
              display: 'absolute',
              left: '40%',
              color: 'black'
            }}
            size='small'
          >
            Learn More
          </Button>
        </CardActions>
      </React.Fragment>
    </Card>
  )
}
export default JobTag
