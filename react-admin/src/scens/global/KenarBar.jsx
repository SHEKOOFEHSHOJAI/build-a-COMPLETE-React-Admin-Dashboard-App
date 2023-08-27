import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/";
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from '../../theme'
import { MapOutlined, MenuOutlined, TimelineOutlined, PieChartOutline, BarChartOutlined, HelpOutline, PeopleOutline, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined } from "@mui/icons-material";



export default function KenarBar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [select, setSelected] = useState("Dashboard")
  return (
    <Box 
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >

          </MenuItem>
          {/* user */}
          {isCollapsed &&(
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                alt="profile"
                width="100px"
                height="100px"
                src=""
                style={{cursor:"pointer", borderRadius:"50%"}}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant='h2'color={colors.grey[100]}fontWeight="bold" sx={{m:"10px 0 0 0"}}>shekoofeh shojai</Typography>
                <Typography>admin</Typography>
              </Box>
            </Box>
            
          )}
        </Menu>
      </Sidebar>
    </Box>
  )
}
