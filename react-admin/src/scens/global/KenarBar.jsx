import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist";
import { Box, IconButton, Typography, colors, useMediaQuery, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from '../../theme'
import { MapOutlined, FaqTodayOutlined, HomeOutlined, PersonOutline, MenuOutlined, TimelineOutlined, PieChartOutline, BarChartOutlined, HelpOutline, PeopleOutline, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined, Translate, Image } from "@mui/icons-material";
import { data } from "../../data/mockDataSidebar";



const Item = ({ title, to, icon, key, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <MenuItem
      key={key}
      active={selected === title}
      style={{ background: isHovering ? '#4cceac' : colors.primary[400], borderRadius: isHovering && "10px", width: isHovering && "90%" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setSelected(title)}
    >
      <Link to={to} style={{ textDecoration: 'none', color: theme.palette.mode === "dark" ? "white" : "black", display: "flex", alignItems: "center", fontSize: "16px" }}>
        <Typography sx={{ paddingRight: "18px" }}>
          {icon}
        </Typography>
        {title}
      </Link>
    </MenuItem>
  )
}


export default function KenarBar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [selected, setSelected] = useState("Dashboard")
  const isMdSize = useMediaQuery('(min-width: 0px) and (max-width: 991.98px)');

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          height: "96vh !important",
          background: `${colors.primary[400]} !important`,
          transition: ".9s all",
          transform: 'translate(9,8), scale(1)',
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} sx={{ background: "#040509", height: "100%" }}  >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(isMdSize ? isCollapsed : !isCollapsed)}
            icon={isCollapsed ? <MenuOutlined sx={{ marginRight: "11px" }} /> : undefined}
            style={{
              margin: "0px 0 0px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* user */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt=""
                  src="../../../public/img/images.png"
                  width="100"
                  height="100"
                  style={{ transition: ".9s all", transform: 'translate(9,8), scale(1)', cursor: "pointer", borderRadius: "50%", height: "100px", width: "100px", background: "grey", marginTop: "12px" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant='h5' color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>shekoofeh shojai</Typography>
                <Typography variant='h6' color={colors.greenAccent[500]}> VP Fancy Admin</Typography>
              </Box>
            </Box>
          )}
          {/* menuItems */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {data && data.map((data1, i) => {
              return (
                <>
                  <Item
                    key={data1.id}
                    // id={i}
                    title={data1.title}
                    to={data1.to}
                    icon={
                      data1.title === "Dashboard" ? <HomeOutlined />
                        : data1.title === "Manage Team" ? <PeopleOutline />
                          : data1.title === "Contact Information" ? <ContactsOutlined />
                            : data1.title === "Invoices Balances" ? <ReceiptOutlined />
                              : data1.title === "Profile Form" ? <PersonOutline />
                                : data1.title === "Calendar" ? <CalendarTodayOutlined />
                                  : data1.title === "FaQ page" ? <HelpOutline />
                                    : data1.title === "Bar Chat" ? <BarChartOutlined />
                                      : data1.title === "Pie Chart" ? <PieChartOutline />
                                        : data1.title === "Line Chart" ? <TimelineOutlined />
                                          : data1.title === "Geography Chart" ? <MapOutlined />
                                            : ""
                    }
                    selected={selected}
                    setSelected={setSelected}
                  />
                </>
              )
            })}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

