import React from 'react'
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarCharts";

export default function Bar() {
  const theme=useTheme()
  return (
    <Box m="20px"
    sx={{
      [theme.breakpoints.up("lg")]: {
        width: "90%"
    },
      [theme.breakpoints.down("md")]: {
        width: "33rem"
    },
    [theme.breakpoints.only("xs")]: {
        width: "16rem"
    }
    }}
    >
    <Header title="Bar Chart" subtitle="Simple Bar Chart" />
    <Box height="75vh" >
      <BarChart />
    </Box>
  </Box>
);

 
}
