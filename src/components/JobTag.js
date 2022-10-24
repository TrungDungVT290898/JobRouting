import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import OpenLoginModalContext from "../contexts/Export";

function VariantButtonGroup({ job }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "space-between",
      }}
    >
      {job.skills.slice(0, 4).map((s) => (
        <Chip
          label={s}
          sx={{
            fontSize: 6,
            margin: 0.2,
            backgroundColor: "tomato",
            color: "white",
          }}
          key={`button-${job.title}-${s}`}
        />
      ))}
    </Box>
  );
}
function JobTag({ job }) {
  const openContextValue = React.useContext(OpenLoginModalContext);
  return (
    <Card
      variant="outlined"
      sx={{
        width: "300px",
        height: "240px",
        backgroundColor: "#353535",
        color: "white",
      }}
    >
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="inherit" gutterBottom>
            {job.title}
          </Typography>
          <Divider />
          <Typography variant="h5" component="span">
            <VariantButtonGroup job={job} />
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography variant="body2">{job.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#FFA726",

              color: "black",
            }}
            onClick={() => {
              openContextValue.handleShowDetailJob(job);
            }}
            size="small"
          >
            Learn More
          </Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
}
export default JobTag;
