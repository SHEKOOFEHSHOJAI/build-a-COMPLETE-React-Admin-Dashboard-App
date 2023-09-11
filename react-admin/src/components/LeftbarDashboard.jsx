import { Box, useTheme,Typography, IconButton } from '@mui/material'
import { DownloadOutlined} from "@mui/icons-material"
import LineChart from "../components/LineChart"


import { tokens } from '../theme'

export default function LeftbarDashboard() {
    const theme=useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <>
       <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center">
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>

            {/*  */}
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>

          </Box>
          {/* charts */}
          <Box height="250px" m="-29px 0 0 0">
            <LineChart  />
          </Box>
        </Box>
    </>
  )
}
