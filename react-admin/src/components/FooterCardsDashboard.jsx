import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '../theme'
import BarCharts from "../components/BarCharts"
import GeographyChart from "../components/GeographyChart"
import ProgressCircle from "../components/ProgressChart"


export default function FooterCardsDashboard({ title, subtitle1, subtitle2, isProgress, isGeographyChart, isBarCharts, }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <>
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600">
                    {title}
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                    height="200px"
                >
                    {
                        isProgress ? <ProgressCircle size="125" />
                            : isGeographyChart ? <GeographyChart />
                                : isBarCharts ? <BarCharts />
                                    : ""
                    }
                    <>
                        {subtitle1 &&
                            <Typography
                                variant="h5"
                                color={colors.greenAccent[500]}
                                sx={{ mt: "15px" }}
                            >
                                $48,352 revenue generated
                            </Typography>
                        }
                    </>
                    <>
                        {subtitle2 &&
                            <Typography>Includes extra misc expenditures and costs</Typography>
                        }
                    </>
                </Box>
            </Box>
        </>
    )
}
