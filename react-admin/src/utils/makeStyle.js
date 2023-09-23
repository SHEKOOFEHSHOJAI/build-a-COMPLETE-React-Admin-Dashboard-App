import { useTheme } from "@mui/material/styles";

export function makeStyles(styleCallback) {
  return () => {
    const theme = useTheme();
    return styleCallback(theme);
  };
}