import {Box,Header} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import{mockDataTeam} from "../../data/mockData"
import { AdminPanelSettingsOutlined,SecurityOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";


export default function Team() {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    
    const columns=[
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
    ]
  return (
    <Box>
        <Header subtitle="Managing the Team Members"/>
        <DataGrid rows={mockDataTeam} columns={columns}/>
    </Box>
   
  )
}