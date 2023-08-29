import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scens/global/Topbar';
import KenarBar from "./scens/global/KenarBar"
import Dashboard from "./scens/dashboard"
import Team from "./scens/team"
// import Invoices from "./scens/Invoices"
// import Contacts from "./scens/Contacts"
// import Form from "./scens/Form"
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
                {/* <Route path="/contacts" elements={<Contacts/>}/> */}
                {/* <Route path="/invoices" elements={<Invoices/>}/>
                <Route path="/form" elements={<Form/>}/>
                <Route path="/pie" elements={<Pie/>}/>
                <Route path="/line" elements={<Line/>}/>
                <Route path="/faq" elements={<FAQ/>}/>
                <Route path="/geography" elements={<Geography/>}/>
                <Route path="/calendar" elements={<Calendar/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
