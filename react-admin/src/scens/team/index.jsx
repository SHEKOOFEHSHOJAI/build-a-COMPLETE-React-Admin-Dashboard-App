import {Box, Typography,useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import{mockDataTeam} from "../../data/mockData"
import { AdminPanelSettingsOutlined,SecurityOutlined,LockOpenOutlined } from "@mui/icons-material";
import Header from "../../components/Header"

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
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
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="40rem"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined sx={{ [theme.breakpoints.down("sm")]: { width:"10px",}}} />}
            {access === "manager" && <SecurityOutlined sx={{ [theme.breakpoints.down("sm")]: { width:"10px",}}}  />}
            {access === "user" && <LockOpenOutlined sx={{ [theme.breakpoints.down("sm")]: { width:"10px",}}} />}
            <Typography 
            sx={{
               ml: "5px", 
               [theme.breakpoints.down("sm")]: {
                fontSize:"10px",
               
              },
               
               }} color={colors.grey[100]} >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          // width:"100%",
          
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "20rem",
          },
          [theme.breakpoints.only("xs")]: {
            width: "30rem",
          },
          
        }}

      >
        <DataGrid sx={{
          [theme.breakpoints.down("sm")]: {
            fontSize:"7px",
           
          },
          
          }} checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;