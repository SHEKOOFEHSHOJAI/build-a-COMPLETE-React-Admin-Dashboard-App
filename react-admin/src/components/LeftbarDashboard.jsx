import { Box, useTheme, Typography, IconButton } from '@mui/material'
import { DownloadOutlined } from "@mui/icons-material"
import LineChart from "../components/LineChart"


import { tokens } from '../theme'

export default function LeftbarDashboard() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <>
      <Box
        sx={{

          gridColumn: "span 8",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
          [theme.breakpoints.down("md")]: {
            gridColumn: "span 12",
            background: "red"
          },
          [theme.breakpoints.only("xs")]: {
            gridColumn: "span 12",
            background: "blue"
          }
        }}
      >
        <Box mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center">
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight:"600",
                color:colors.grey[100],
                [theme.breakpoints.down("md")]: {
                 variant:"h8"
               },
               [theme.breakpoints.only("xs")]: {
                 fontSize:"15px"
                 
               }
              }}
            >
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
              sx={{
                [theme.breakpoints.down("md")]: {
                  fontSize: "18px"
                },
                [theme.breakpoints.only("xs")]: {
                  fontSize: "15px"
                }
              }}
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
        <Box sx={{
          height:"15rem",
           m:"-29px 0 0 0", 
          [theme.breakpoints.only("xs")]: {
            minWidth: "16rem"
          }
        }}>
          <LineChart />
        </Box>
      </Box>
    </>
  )
}
