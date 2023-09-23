import React from 'react'
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarCharts";
import { makeStyles } from '../../utils/makeStyle';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
    [theme.breakpoints.up("lg")]: {
      width: "90%"
    },
    [theme.breakpoints.down("md")]: {
      width: "33rem"
    },
    [theme.breakpoints.only("xs")]: {
      width: "16rem"
    }
  },
}));
export default function Bar() {
  const { root } = useStyles();

  return (
    <Box m="20px"
      sx={root}
    >
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh" >
        <BarChart />
      </Box>
    </Box>
  );


}
