import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scens/global/Topbar';
import KenarBar from "./scens/global/KenarBar"
import Dashboard from "./scens/dashboard"
import Team from "./scens/team"
import Invoices from "./scens/invoices"
import Contacts from "./scens/contacts/"
import Form from "./scens/form"
// import Bar from "./scens/bar"
// import Line from "./scens/bar"
// import Pie from "./scens/pie"
// import FAQ from "./scens/faq"
// import Geography from "./scens/geography"
// import Calendar from "./scens/geography"
import {Routes,Route} from "react-router-dom"

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <KenarBar/>
          <main className='content'>
            <Topbar/>
            <Routes>
               
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
               <Route path="/invoices" element={<Invoices/>}/>
                 <Route path="/form" element={<Form/>}/>
                {/* <Route path="/pie" element={<Pie/>}/>
                <Route path="/line" element={<Line/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/geography" element={<Geography/>}/>
                <Route path="/calendar" element={<Calendar/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
