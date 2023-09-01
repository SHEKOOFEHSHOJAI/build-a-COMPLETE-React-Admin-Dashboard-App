import { Typography, useTheme,Box } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'
import ProgressCircle from './ProgressChart'

export default function StateBox({title,subtitle,icon,increase,progress}) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justify-content="space-between">
                {icon}
                <Typography variant='h4' fontWeight="bold" sx={{ color: colors.grey[100] }}>
                    {title}
                </Typography>
            </Box>
            <ProgressCircle progress={progress} />
            <Box display="flex" justify-content="space-between">
                {icon}
                <Typography variant='h4' fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>

                <Typography variant='h5' fontStyle="italic" sx={{ color: colors.greenAccent[600] }}>
                    {increase}
                </Typography>
            </Box>
        </Box>

    )
}
