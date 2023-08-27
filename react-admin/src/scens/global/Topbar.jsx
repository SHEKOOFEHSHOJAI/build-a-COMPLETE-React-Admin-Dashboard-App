import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from 'react';
import InputBase from '@mui/material/InputBase';
import { Search, PersonOutline, SettingsOutlined, NotificationsOutlined, LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";


export default function Topbar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ mr: 1, flex: 1 }} placeholder="Search"></InputBase>
        <IconButton sx={{ p: 1 }} type="button" >
          <Search />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (

            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>

      </Box>


    </Box>

  )
}
