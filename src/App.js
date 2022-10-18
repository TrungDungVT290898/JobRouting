import './App.css'
import SearchAppBar from './components/SearchAppBar'
import { CssBaseline, Pagination } from '@mui/material'
import JobTags from './components/JobTags'
import { Fragment, useState } from 'react'
import jobs from './data'
import SpacingGrid from './components/TestGrid'

function App () {
  const [listJob, setListJobs] = useState(jobs.slice(0, 5))
  const handleChangePage = (e, page) => {
    console.log(listJob)
    setListJobs(jobs.slice((page - 1) * 5, (page - 1) * 5 + 5))
  }
  return (
    <div className='App'>
      <Fragment>
        <CssBaseline />
        <SearchAppBar />
        <JobTags jobs={listJob} />

        <Pagination
          className='pagination'
          count={Number.parseInt(jobs.length / 5)}
          onChange={(e, page) => handleChangePage(e, page)}
          variant='outlined'
          shape='rounded'
          color='primary'
        />
      </Fragment>
    </div>
  )
}

export default App
