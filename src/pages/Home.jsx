/* eslint-disable no-unused-vars */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import DataTable from "../Components/DataTable";

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        {[...Array(4)].map((val, idx) => (
          <Grid key={idx} item xs={12} md={6}>
            <Card
              sx={{
                minWidth: 275,
                background: `${idx === 1 || idx === 2 ? "pink" : "grey"}`,
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <DataTable/>
    </>
  );
};

export default Home;
