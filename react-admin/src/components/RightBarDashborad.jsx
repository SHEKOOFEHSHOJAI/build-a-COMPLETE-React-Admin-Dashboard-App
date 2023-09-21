import { Box, useTheme, Button, Typography} from '@mui/material'
import { mockTransactions } from "../data/mockData"

import { tokens } from '../theme'


export default function RightBarDashborad() {
    const theme=useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <>

            {/* tranceAction */}
            <Box 
            sx={{

                gridColumn:"span 4",
                 gridRow:"span 2" ,
                 backgroundColor:colors.primary[400],
                  overflow:"auto",
                  [theme.breakpoints.down("md")]: {
                    gridColumn:"span 12",
                    background:"red"
                },
                [theme.breakpoints.only("xs")]: {
                    gridColumn:"span 12",
                    background:"blue"
                }
            }}
            >

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                >
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                        Recent Transactions
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                    >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h5"
                                fontWeight="600"
                                sx={{
                                    [theme.breakpoints.only("xs")]: {
                                     fontSize:"16px"
                                    } 
                                }}
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[100]} sx={{
                                 [theme.breakpoints.only("xs")]: {
                                    fontSize:"15px"
                                }
                            }}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        {/* date */}
                        <Box 
                        sx={{ 
                            color:colors.grey[100],
                            [theme.breakpoints.only("xs")]: {
                            fontSize:"15px",
                           
                          }}}
                        >{transaction.date}</Box>
                        <Box
                         sx={{
                             backgroundColor:colors.greenAccent[500],
                             p:"5px 10px",
                             borderRadius:"4px",
                             [theme.breakpoints.down("md")]: {
                                fontSize:"15px",
                                color:"red",
                                p:"2px 5px",
                             },
                             [theme.breakpoints.only("xs")]: {
                               fontSize:"15px",
                               p:"2px 3px",
                             }
                         }}
                        >
                            ${transaction.cost}
                        </Box>

                    </Box>
                ))}
            </Box>
        </>
    )
}
