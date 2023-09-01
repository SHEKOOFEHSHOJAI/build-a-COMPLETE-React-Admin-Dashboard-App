import {Box,useTheme} from '@mui/material'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import {mockTransactions} from "../../data/mockData"
import {DownloadOutlined,Email,PointOfSale,PersonAdd} from "@mui/icons-material"
import LineChart  from "../../components/LineChart"
import ProgressCircle from "../../components/ProgressChart"
import BarCharts from "../../components/BarCharts"
import GeographyChart from "../../components/GeographyChart"
import StateBox from "../../components/StateBox"
import Header from '../../components/Header'
import { tokens } from '../../theme'



export default function Dashboard() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Box display="flex" justify-content="space-between" alignItems="center">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
       
      </Box>
    </Box>
  )
}
