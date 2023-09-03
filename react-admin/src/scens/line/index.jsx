import React from 'react'
import { Box,useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
// import { tokens } from "../theme";
export default function LINE() {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box 
       sx={{
        height:"75vh",
        [theme.breakpoints.down("md")]: {
          width:"40rem"
        },
        [theme.breakpoints.only("xs")]: {
          width:"30rem"
        }
        }} >
        <LineChart />
      </Box>
    </Box>
  );
}