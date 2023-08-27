import {Box,IconButton,useTheme} from '@mui/material';
import {ColorModeContext,tokens}from "../../theme";
import { useContext } from 'react';
import InputBase from '@mui/material';
import {Search,PersonOutline,SettingsOutlined,NotificationsOutlined,LightModeOutlined,DarkModeOutlined} from "@mui/icons-material";


export default function Topbar() {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const colorMode=useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      Topbar
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px"></Box>
      <IconButton sx={{display:"flex"}}></IconButton>
      </Box>
  )
}
