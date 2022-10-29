import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Login from './pages/Login';
import Main from './pages/Main';
import PageNavigation from './pages/configuration/PageNavigation';
import global from './styles/global';
import OperationPage from './pages/OperationManagement';
import DataSourcePage from './pages/DataSourceManagement';
import { URL } from './const/router';
import ProjectManagementPage from './pages/ProjectManagement';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={global} />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={URL.main} element={<Main />} />,
          <Route path={URL.login} element={<Login />} />,
          <Route path={URL.operationManagement} element={<OperationPage />} />,
          <Route path={URL.dataSourceManagement} element={<DataSourcePage />} />,
          <Route path={URL.projectManagement} element={<ProjectManagementPage />} />,
          <Route path={URL.configuration} element={<PageNavigation />} />,
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
