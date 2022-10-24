import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, Chip, Divider } from "@mui/material";
import OpenLoginModalContext from "../contexts/Export";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};
export default function DetailModal() {
  const openContextValue = React.useContext(OpenLoginModalContext);
  const job = openContextValue.currentJob;

  return (
    <Modal
      open={openContextValue.isOpenDetailModal}
      onClose={openContextValue.handleDetailModalClose}
      sx={{ minWidth: 400 }}
    >
      <Card variant="outlined" sx={style}>
        <React.Fragment>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{ fontSize: 30 }}
              color="text.secondary"
              gutterBottom
            >
              {openContextValue.currentJob.title}
            </Typography>
            <Divider />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`Salary: ${job.salaryLow}-${job.salaryHigh}`}
            </Typography>
            <Typography variant="body2">{job.description}</Typography>

            <Typography variant="h5" component="div">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  alignItems: "space-between",
                  fontSize: 12,
                  marginTop: 1,
                }}
              >
                <span>
                  Skill:
                  {job.skills.map((s) => (
                    <Chip
                      label={s}
                      sx={{
                        fontSize: 8,
                        margin: 0.2,
                        backgroundColor: "tomato",
                        color: "white",
                      }}
                      key={`button-${job.title}-${s}`}
                    />
                  ))}
                </span>
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                marginTop: 1,
              }}
            >
              City:{job.city}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Modal>
  );
}
