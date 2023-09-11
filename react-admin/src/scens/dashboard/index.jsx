import { Box, useTheme, Button} from '@mui/material'
import { DownloadOutlined } from "@mui/icons-material"
import Header from '../../components/Header'
import { tokens } from '../../theme'
import DashboardCards from '../../components/DashboardCards'
import RightBarDashborad from '../../components/RightBarDashborad'
import LeftbarDashboard from '../../components/LeftbarDashboard'
import FooterCardsDashboard from '../../components/FooterCardsDashboard'


export default function Dashboard() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to Dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* row 1 */}
        <DashboardCards />
        {/* row 2 */}
        <LeftbarDashboard />
        {/* right section */}
        {/* tranceAction */}
        <RightBarDashborad />
        {/* row 3 */}
        <FooterCardsDashboard title="Campaign" subtitle1 subtitle2 isProgress />
        <FooterCardsDashboard title="Sales Quantity" isBarCharts />
        <FooterCardsDashboard title="Geography Based Traffic" isGeographyChart />
      </Box>
    </Box>
  );
}
