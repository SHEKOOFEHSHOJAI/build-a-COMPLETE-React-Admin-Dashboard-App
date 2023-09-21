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
                sx={{
                    gridColumn: "span 4",
                    gridRow: "span 2",
                    backgroundColor: colors.primary[400],
                    padding: "30px",
                    [theme.breakpoints.down("md")]: {
                        gridColumn: "span 6",
                        background: "red"
                    },
                    [theme.breakpoints.only("xs")]: {
                        gridColumn: "span 12",
                        background: "blue"
                    }
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "600",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "15px"
                        },
                        [theme.breakpoints.only("xs")]: {
                            fontSize: "15px"
                        }
                    }}
                    variant="h5"
                >
                    {title}
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                    justifyContent="center"
                    height="200px"
                    // width="14rem"
                    // ml="-20px"
                    // overflow="Hidden"
                >
                    {
                        isProgress ? <ProgressCircle size="6" />
                            : isGeographyChart ? <GeographyChart />
                                : isBarCharts ? <BarCharts />
                                    : ""
                    }
                    <>
                        {subtitle1 &&
                            <Typography
                                variant="h5"
                                color={colors.greenAccent[500]}

                                sx={{
                                    mt: "15px",
                                    [theme.breakpoints.only("xs")]: {
                                        fontSize: "20px"
                                    }
                                }}
                            >
                                $48,352 revenue generated
                            </Typography>
                        }
                    </>
                    <>
                        {subtitle2 &&
                            <Typography sx={{
                                [theme.breakpoints.only("xs")]: {
                                    fontSize: "15px"
                                }
                            }}>Includes extra misc expenditures and costs</Typography>
                        }
                    </>
                </Box>
            </Box>
        </>
    )
}
