import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressChart";

export default function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: colors.grey[100],
              [theme.breakpoints.down("md")]: {
                fontSize: "22px"
              },
              [theme.breakpoints.only("xs")]: {
                fontSize: "20px"
              }
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} size="3" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h7"
          sx={{
            color: colors.greenAccent[500],
            [theme.breakpoints.down("md")]: {
              fontSize: "15px"
            },
            [theme.breakpoints.only("xs")]: {
              fontSize: "15px"
            }
          }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{
            color: colors.greenAccent[600],
            [theme.breakpoints.down("md")]: {
              fontSize: "15px"
            },
            [theme.breakpoints.only("xs")]: {
              fontSize: "15px"
            }
          }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

