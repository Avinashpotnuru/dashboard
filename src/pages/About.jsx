/* eslint-disable no-unused-vars */
import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import DialogComponent from "../Components/Dialog";
import DataTable from "../Components/DataTable";

const About = () => {
  return (
    <Box>
      <Grid container>
        <DataTable />
      </Grid>
    </Box>
  );
};

export default About;
