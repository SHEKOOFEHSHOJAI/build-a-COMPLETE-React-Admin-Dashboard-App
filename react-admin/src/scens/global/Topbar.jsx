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
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>

      <Box
        sx={{
          display: "flex",
          borderRadius: "3px",
          backgroundColor: colors.primary[400],
          [theme.breakpoints.only("xs")]: {
            height: "2rem",
            "& input": {
              fontSize: "14px"
            },
            "& svg": {
              fontSize: "18px"
            }
          },

        }}
      >
        <InputBase placeholder="Search" ></InputBase>
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
