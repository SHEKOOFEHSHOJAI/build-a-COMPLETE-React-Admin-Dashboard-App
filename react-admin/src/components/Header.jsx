import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function Header ({ title, subtitle }){
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{
          m: "0 0 5px 0",
          [theme.breakpoints.down("sm")]: {
            fontSize:"20px",
           
          }
         }}
      >
        {title}
      </Typography>
      <Typography
      
      sx={{
        m: "0 0 5px 0",
        [theme.breakpoints.down("sm")]: {
          fontSize:"15px",
          marginBottom:"-10px"
         
        }}}
      variant="h6" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};