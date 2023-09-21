import { Box, useTheme } from '@mui/material'
import StateBox from "../components/StateBox"
import { data } from "../data/dashboardData"
import { tokens } from '../theme'
import { DownloadOutlined, Traffic, Email,PersonAdd } from "@mui/icons-material"


export default function DashboardCards() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <>
            {
                data?.map(data1 => {
                    console.log(data1)
                    return (

                        <Box
                        sx={{

                            gridColumn:"span 3",
                            backgroundColor:colors.primary[400],
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            background:"red",
                            [theme.breakpoints.down("md")]: {
                                gridColumn:"span 6",
                                background:"red"
                            },
                            [theme.breakpoints.only("xs")]: {
                                gridColumn:"span 12",
                                background:"blue"
                            }
                        }}
                        >
                            <StateBox
                                title={data1.title}
                                subtitle={data1.subtitle}
                                progress={data1.progress}
                                increase={data1.increase}
                                icon={
                                    data1.subtitle === "Traffic Inbound" ?
                                        <Traffic
                                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                        />
                                        : data1.subtitle === "Person Sent" ?
                                            <PersonAdd
                                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                            />
                                            : data1.subtitle === "Download" ?
                                                <DownloadOutlined
                                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                                />
                                                : data1.subtitle === "Emails Sent" ?
                                                    <Email
                                                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                                    /> : ""

                                }
                            />
                        </Box>
                    )
                }

                )
            }


        </>

    )
}

