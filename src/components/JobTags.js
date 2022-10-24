import React from "react";
import JobTag from "./JobTag";

import { Grid } from "@mui/material";

function JobTags({ jobs }) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        flexWrap: "wrap",
        width: "80%",
        margin: "auto",
        marginTop: 10,
      }}
      container
      spacing={4}
    >
      {jobs.map((j) => (
        <Grid item key={`job_grid_${j.id}`} sx={{ marginTop: "20px" }}>
          <JobTag key={`job_${j.id}`} job={j} />
        </Grid>
      ))}
    </Grid>
  );
}

export default JobTags;
