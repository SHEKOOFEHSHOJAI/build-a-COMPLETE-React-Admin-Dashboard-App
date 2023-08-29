import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist";
import { Box, IconButton, Typography, colors, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from '../../theme'
import { MapOutlined, FaqTodayOutlined, HomeOutlined, PersonOutline, MenuOutlined, TimelineOutlined, PieChartOutline, BarChartOutlined, HelpOutline, PeopleOutline, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined } from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}>
      {/* <Typography>{title}</Typography> */}
      <Link to={to} style={{textDecoration: 'none',color:"black"}}>{title}</Link>
    </MenuItem>
  )
}

// export default function KenarBar() {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)
//   const [isCollapsed, setIsCollapsed] = useState(false)
//   const [selected, setSelected] = useState("Dashboard")
//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <Sidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlined /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h6" color={colors.grey[100]}>
//                   ADMINIS
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlined />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>
//           {/* user */}
//           {!isCollapsed && (
//             <Box mb="25px">
//               <Box display="flex" justifyContent="center" alignItems="center">
//                 <PersonOutline
//                   style={{ cursor: "pointer", borderRadius: "50%", height: "100px", width: "100px", background: "grey" }}
//                 />
//               </Box>
//               <Box textAlign="center">
//                 <Typography variant='h5' color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>shekoofeh shojai</Typography>
//                 <Typography variant='h6' color={colors.greenAccent[500]}> VP Fancy Admin</Typography>
//               </Box>
//             </Box>
//           )}
//           {/* menuItems */}
//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<HomeOutlined />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant='h8'
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}>
//               Data
//             </Typography>
//             <Item
//               title="Manage Team"
//               to="/team" 
//               icon={<PeopleOutline />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//               <Link  icon={<PeopleOutline />}>Manage Team</Link>
//               {/* </Item> */}
//             <Item
//               title="Contact Information"
//               to="/contacts"
//               icon={<ContactsOutlined />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant='h8'
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}>
//               Pages
//             </Typography>
//             <Item
//               title="Invoices Balances"
//               to="/invoices"
//               icon={<ReceiptOutlined />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Profile Form"
//               to="/Form"
//               icon={<PersonOutline />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Calendar"
//               to="/calendar"
//               icon={<CalendarTodayOutlined />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="FaQ page"
//               to="/faq"
//               icon={<HelpOutline />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//              <Typography 
//             variant='h8' 
//             color={colors.grey[300]} 
//             sx={{m:"15px 0 5px 20px"}}>
//               Charts
//               </Typography>
//             <Item
//               title="Bar Chat "
//               to="/bar"
//               icon={<BarChartOutlined />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Pie Chart "
//               to="/pie"
//               icon={<PieChartOutline />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Line Chart "
//               to="/line"
//               icon={<TimelineOutlined />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Geography Chart "
//               to="/geography"
//               icon={<MapOutlined />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Box>
//         </Menu>
//       </Sidebar>
//     </Box>
//   )
// }






export default function KenarBar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
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
                <PersonOutline
                  style={{ cursor: "pointer", borderRadius: "50%", height: "100px", width: "100px", background: "grey" }}
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
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h8'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team" 
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            
             
            <Item
              title="Contact Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h8'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Profile Form"
              to="/Form"
              icon={<PersonOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FaQ page"
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />
             <Typography 
            variant='h8' 
            color={colors.grey[300]} 
            sx={{m:"15px 0 5px 20px"}}>
              Charts
              </Typography>
            <Item
              title="Bar Chat "
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart "
              to="/pie"
              icon={<PieChartOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart "
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart "
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

