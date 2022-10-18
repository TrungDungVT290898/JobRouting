import './App.css'
import SearchAppBar from './components/SearchAppBar'
import { Pagination } from '@mui/material'
import JobTags from './components/JobTags'
import { useState } from 'react'
import jobs from './data'

function App () {
  const [listJob, setListJobs] = useState(jobs.slice(0, 5))
  const handleChangePage = (e, page) => {
    setListJobs(jobs.slice((page - 1) * 5, (page - 1) * 5 + 5))
  }
  return (
    <>
      <SearchAppBar />
      <div className='App'>
        <JobTags jobs={listJob} />
        <Pagination
          className='pagination'
          count={Number.parseInt(jobs.length / 5)}
          onChange={(e, page) => handleChangePage(e, page)}
          variant='outlined'
          shape='rounded'
          color='primary'
        />
      </div>
    </>
  )
}

export default App
